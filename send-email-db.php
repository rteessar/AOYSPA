<?php
/**
 * Contact Form Handler with Database Storage
 * Angel Financial Services Oy
 */

define('ANGELOY_APP', true);
require_once 'config.php';

header('Content-Type: application/json; charset=utf-8');

// Replies to the visitor follow the language of the page (the form sends lang=fi|en)
$lang = (($_POST['lang'] ?? '') === 'en') ? 'en' : 'fi';
$texts = [
    'fi' => [
        'rate_limit' => 'Liian monta yritystä. Odota hetki ja yritä uudelleen.',
        'sent' => 'Kiitos viestistäsi! Otamme sinuun yhteyttä pian.',
        'first_name' => 'Etunimi on pakollinen',
        'last_name' => 'Sukunimi on pakollinen',
        'email_required' => 'Sähköposti on pakollinen',
        'email_invalid' => 'Virheellinen sähköpostiosoite',
        'message_required' => 'Viesti on pakollinen',
        'message_short' => 'Viesti on liian lyhyt (vähintään 10 merkkiä)',
        'message_long' => 'Viesti on liian pitkä (maksimi 5000 merkkiä)',
        'field_too_long' => 'Nimi, puhelinnumero tai yrityksen nimi on liian pitkä',
        'spam' => 'Viesti sisältää kiellettyä sisältöä',
        'duplicate' => 'Olet jo lähettänyt tämän viestin. Jos kyseessä on kiireellinen asia, soita meille suoraan.',
        'error' => 'Tapahtui virhe viestin lähetyksessä. Yritä myöhemmin uudelleen tai ota yhteyttä suoraan sähköpostitse.',
    ],
    'en' => [
        'rate_limit' => 'Too many attempts. Please wait a moment and try again.',
        'sent' => 'Thank you for your message! We will get back to you soon.',
        'first_name' => 'First name is required',
        'last_name' => 'Last name is required',
        'email_required' => 'Email is required',
        'email_invalid' => 'Invalid email address',
        'message_required' => 'Message is required',
        'message_short' => 'The message is too short (at least 10 characters)',
        'message_long' => 'The message is too long (at most 5000 characters)',
        'field_too_long' => 'The name, phone number or company name is too long',
        'spam' => 'The message contains content that is not allowed',
        'duplicate' => 'You have already sent this message. If the matter is urgent, please call us.',
        'error' => 'Sending your message failed. Please try again later or email us directly.',
    ],
];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJSON(['success' => false, 'message' => 'Invalid request method'], 405);
}

$ip = getClientIP();
$userAgent = getUserAgent();
$referrer = getReferrer();

try {
    $db = getDB();
    
    // Rate limiting
    if (!checkRateLimit($db, $ip)) {
        logSpam($db, $ip, null, 'Rate limit exceeded', $_POST);
        sendJSON([
            'success' => false,
            'message' => userMessage('rate_limit')
        ], 429);
    }
    
    // Honeypot check
    if (ENABLE_HONEYPOT && !empty($_POST['website'])) {
        logSpam($db, $ip, $_POST['email'] ?? null, 'Honeypot triggered', $_POST);
        sendJSON(['success' => true, 'message' => 'Message sent']);
    }
    
    // Get and validate input. Fields that end up in email headers are reduced
    // to a single line: a line break in a name would let anyone add headers
    // such as "Bcc:" and send spam through this form.
    $firstName = singleLine(sanitize($_POST['firstName'] ?? ''));
    $lastName = singleLine(sanitize($_POST['lastName'] ?? ''));
    $email = singleLine(sanitize($_POST['email'] ?? ''));
    $phone = singleLine(sanitize($_POST['phone'] ?? ''));
    $company = singleLine(sanitize($_POST['company'] ?? ''));
    $service = singleLine(sanitize($_POST['service'] ?? ''));
    $message = sanitize($_POST['message'] ?? '');
    
    $errors = [];
    
    if (empty($firstName)) $errors[] = userMessage('first_name');
    if (empty($lastName)) $errors[] = userMessage('last_name');
    
    if (empty($email)) {
        $errors[] = userMessage('email_required');
    } elseif (!isValidEmail($email)) {
        $errors[] = userMessage('email_invalid');
    }
    
    if (empty($message)) {
        $errors[] = userMessage('message_required');
    } elseif (textLength($message) < 10) {
        $errors[] = userMessage('message_short');
    } elseif (textLength($message) > 5000) {
        $errors[] = userMessage('message_long');
    }
    
    if (textLength($firstName) > 100 || textLength($lastName) > 100 || textLength($phone) > 40 || textLength($company) > 150) {
        $errors[] = userMessage('field_too_long');
    }
    
    // Names are repeated in the automatic reply, so links in them are refused
    // (otherwise the auto-reply could carry spam to any address).
    if (containsSpam($message) || containsSpam($firstName) || containsSpam($lastName)
        || containsLink($firstName) || containsLink($lastName)) {
        logSpam($db, $ip, $email, 'Spam keywords detected', $_POST);
        $errors[] = userMessage('spam');
    }
    
    if (!empty($errors)) {
        sendJSON(['success' => false, 'message' => implode(', ', $errors)], 400);
    }
    
    if (!empty($phone)) {
        $phone = formatPhoneNumber($phone);
    }
    
    $priority = detectPriority($message);
    
    // Check for duplicate submissions
    $stmt = $db->prepare("
        SELECT id FROM contact_submissions 
        WHERE email = ? AND message = ? 
        AND submitted_at > DATE_SUB(NOW(), INTERVAL 1 HOUR)
    ");
    $stmt->execute([$email, $message]);
    
    if ($stmt->fetch()) {
        sendJSON([
            'success' => false,
            'message' => userMessage('duplicate')
        ], 400);
    }
    
    // Insert into database
    $stmt = $db->prepare("
        INSERT INTO contact_submissions (
            first_name, last_name, email, phone, company, 
            service, message, ip_address, user_agent, referrer, priority
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    $result = $stmt->execute([
        $firstName, $lastName, $email, $phone, $company,
        $service, $message,
        ENABLE_IP_LOGGING ? $ip : null,
        ENABLE_IP_LOGGING ? substr($userAgent, 0, 500) : null,
        ENABLE_IP_LOGGING ? substr($referrer, 0, 500) : null,
        $priority
    ]);
    
    if (!$result) {
        throw new Exception('Database insert failed');
    }
    
    $submissionId = $db->lastInsertId();
    
    // Send email notification
    $emailSent = sendNotificationEmail(
        $db, $submissionId, $firstName, $lastName, $email,
        $phone, $company, $service, $message, $priority, $ip, $lang
    );
    
    if (!$emailSent) {
        logError('Failed to send notification email', [
            'submission_id' => $submissionId,
            'email' => $email
        ]);
    }
    
    // Send auto-reply
    if (SEND_AUTO_REPLY) {
        $autoReplySent = sendAutoReply($db, $submissionId, $email, $firstName, $lang);
        
        if (!$autoReplySent) {
            logError('Failed to send auto-reply', [
                'submission_id' => $submissionId,
                'email' => $email
            ]);
        }
    }
    
    // Update rate limit
    updateRateLimit($db, $ip);
    
    sendJSON([
        'success' => true,
        'message' => userMessage('sent'),
        'submission_id' => $submissionId
    ]);
    
} catch (Exception $e) {
    logError('Contact form error', [
        'error' => $e->getMessage(),
        'trace' => $e->getTraceAsString()
    ]);
    
    sendJSON([
        'success' => false,
        'message' => userMessage('error')
    ], 500);
}

// Helper functions
function userMessage($key) {
    global $texts, $lang;
    return $texts[$lang][$key];
}

// Removes line breaks and other control characters from a one-line field.
function singleLine($text) {
    return trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $text) ?? '');
}

function textLength($text) {
    return function_exists('mb_strlen') ? mb_strlen($text, 'UTF-8') : strlen($text);
}

function containsLink($text) {
    return preg_match('/https?:|www\.|@/i', $text) === 1;
}

// Encodes a header value (names with ä, ö, ...) as RFC 2047 so mail
// servers and clients show it correctly.
function encodeHeader($text) {
    if (preg_match('/^[\x20-\x7E]*$/', $text)) {
        return $text;
    }
    if (function_exists('mb_encode_mimeheader')) {
        return mb_encode_mimeheader($text, 'UTF-8', 'B', "\r\n");
    }
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}
function checkRateLimit($db, $ip) {
    $stmt = $db->prepare("
        SELECT submission_count, first_attempt 
        FROM rate_limits 
        WHERE ip_address = ? 
        AND last_attempt > DATE_SUB(NOW(), INTERVAL ? SECOND)
    ");
    $stmt->execute([$ip, RATE_LIMIT_PERIOD]);
    $limit = $stmt->fetch();
    
    if ($limit) {
        return $limit['submission_count'] < MAX_SUBMISSIONS_PER_HOUR;
    }
    
    return true;
}

function updateRateLimit($db, $ip) {
    $stmt = $db->prepare("
        INSERT INTO rate_limits (ip_address, submission_count) 
        VALUES (?, 1)
        ON DUPLICATE KEY UPDATE 
            submission_count = submission_count + 1,
            last_attempt = CURRENT_TIMESTAMP
    ");
    $stmt->execute([$ip]);
}

function logSpam($db, $ip, $email, $reason, $formData) {
    try {
        $stmt = $db->prepare("
            INSERT INTO spam_log (ip_address, email, reason, form_data) 
            VALUES (?, ?, ?, ?)
        ");
        $stmt->execute([$ip, $email, $reason, json_encode($formData)]);
    } catch (Exception $e) {
        logError('Failed to log spam', ['error' => $e->getMessage()]);
    }
}

function containsSpam($text) {
    $spamKeywords = [
        'viagra', 'cialis', 'casino', 'poker', 'lottery',
        'bitcoin investment', 'crypto scam', 'get rich quick',
        '<script', 'javascript:', 'onclick=', 'onerror='
    ];
    
    $lowerText = strtolower($text);
    
    foreach ($spamKeywords as $keyword) {
        if (strpos($lowerText, $keyword) !== false) {
            return true;
        }
    }
    
    if (substr_count($lowerText, 'http') > 3) {
        return true;
    }
    
    return false;
}

function sendNotificationEmail($db, $submissionId, $firstName, $lastName, $email, $phone, $company, $service, $message, $priority, $ip, $lang) {
    $serviceNames = [
        'kirjanpito' => 'Kuukausikirjanpito',
        'palkanlaskenta' => 'Palkanlaskenta',
        'yritysrekisterointi' => 'Yritysrekisteröinti',
        'tilinpaatos' => 'Tilinpäätös',
        'verosuunnittelu' => 'Verosuunnittelu',
        'konsultointi' => 'Konsultointi',
        'muu' => 'Muu palvelu'
    ];
    
    $selectedService = $serviceNames[$service] ?? 'Ei valittu';
    $priorityBadge = $priority === 'high' ? '🔴 KIIREELLINEN' : ($priority === 'urgent' ? '🔴 ERITTÄIN KIIREELLINEN' : '');
    
    $subject = '[Yhteydenotto' . ($priorityBadge ? ' - KIIREELLINEN' : '') . '] ' . $firstName . ' ' . $lastName;
    
    $body = '<!DOCTYPE html><html><head><style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
        .header { background: radial-gradient(circle,rgba(241, 197, 14, 1) 0%, rgba(255, 251, 28, 1) 50%, rgba(241, 197, 14, 1) 100%); color: black; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .priority-high { background: #dc3545; padding: 10px; color: white; text-align: center; font-weight: bold; }
        .content { background: white; padding: 30px; border-radius: 0 0 5px 5px; }
        .field { margin-bottom: 15px; padding: 10px; background: #f5f5f5; border-left: 4px solid #f1c50e; }
        .label { font-weight: bold; color: black; }
        .message-box { background: #e8f4f8; padding: 15px; border-radius: 5px; margin-top: 20px; white-space: pre-wrap; }
        .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
        .action-btn { display: inline-block; padding: 12px 24px; background: #f1c50e; color: black; text-decoration: none; border-radius: 5px; margin: 10px 5px; transition: background-color 0.3s ease, color 0.3s ease;}
        .action-btn:hover { background: black; color: white; }
    </style></head><body>
        <div class="container">
            ' . ($priority === 'high' || $priority === 'urgent' ? '<div class="priority-high">' . $priorityBadge . '</div>' : '') . '
            <div class="header">
                <h2>Uusi yhteydenottopyyntö</h2>
                <p>' . COMPANY_NAME . '</p>
            </div>
            <div class="content">
                <div class="field"><div class="label">Nimi:</div><div>' . htmlspecialchars($firstName . ' ' . $lastName) . '</div></div>
                <div class="field"><div class="label">Sähköposti:</div><div><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></div></div>
                ' . (!empty($phone) ? '<div class="field"><div class="label">Puhelinnumero:</div><div><a href="tel:' . htmlspecialchars($phone) . '">' . htmlspecialchars($phone) . '</a></div></div>' : '') . '
                ' . (!empty($company) ? '<div class="field"><div class="label">Yritys:</div><div>' . htmlspecialchars($company) . '</div></div>' : '') . '
                <div class="field"><div class="label">Kiinnostunut palvelu:</div><div>' . htmlspecialchars($selectedService) . '</div></div>
                <div class="field"><div class="label">Asiointikieli:</div><div>' . ($lang === 'en' ? 'englanti (vastaa englanniksi)' : 'suomi') . '</div></div>
                <div class="field"><div class="label">Prioriteetti:</div><div>' . ucfirst($priority) . '</div></div>
                <div class="message-box"><div class="label">Viesti:</div><div>' . nl2br(htmlspecialchars($message)) . '</div></div>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="mailto:' . htmlspecialchars($email) . '" class="action-btn">Vastaa sähköpostilla</a>
                    ' . (!empty($phone) ? '<a href="tel:' . htmlspecialchars($phone) . '" class="action-btn">Soita asiakkaalle</a>' : '') . '
                </div>
                <div class="footer">
                    <p><strong>Yhteydenotto #' . $submissionId . '</strong></p>
                    <p>Lähetetty: ' . date('d.m.Y H:i:s') . '</p>
                    ' . (ENABLE_IP_LOGGING ? '<p>IP-osoite: ' . htmlspecialchars($ip) . '</p>' : '') . '
                </div>
            </div>
        </div>
    </body></html>';
    
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . encodeHeader(COMPANY_NAME) . ' <' . AUTO_REPLY_FROM_EMAIL . '>',
        'Reply-To: ' . encodeHeader($firstName . ' ' . $lastName) . ' <' . $email . '>',
        'X-Priority: ' . ($priority === 'high' || $priority === 'urgent' ? '1' : '3')
    ];
    
    $recipients = explode(',', NOTIFICATION_EMAILS);
    $success = true;
    
    foreach ($recipients as $recipient) {
        $recipient = trim($recipient);
        $sent = mail($recipient, encodeHeader($subject), $body, implode("\r\n", $headers));
        logEmailSent($db, $submissionId, 'notification', $recipient, $subject, $sent);
        if (!$sent) $success = false;
    }
    
    return $success;
}

function sendAutoReply($db, $submissionId, $email, $firstName, $lang) {
    $t = $lang === 'en' ? [
        'subject' => 'Thank you for contacting us - ' . COMPANY_NAME,
        'title' => 'Thank you for contacting us!',
        'greeting' => 'Hi',
        'received' => 'We have received your message and will get back to you <strong>within 1-2 business days</strong>.',
        'important' => 'Your message is important to us, and one of our experienced specialists will handle it as soon as possible.',
        'urgent' => 'Urgent matters:',
        'phone' => 'Phone',
        'email' => 'Email',
        'hours' => 'Opening hours',
        'hours_value' => 'Mon-Thu 10-16, Fri online 10-16',
        'regards' => 'Best regards,',
        'visit' => 'Visit our website',
        'url' => 'https://angeloy.fi/?lang=en',
    ] : [
        'subject' => 'Kiitos yhteydenotostasi - ' . COMPANY_NAME,
        'title' => 'Kiitos yhteydenotostasi!',
        'greeting' => 'Hei',
        'received' => 'Olemme vastaanottaneet viestisi ja otamme sinuun yhteyttä <strong>1-2 arkipäivän kuluessa</strong>.',
        'important' => 'Yhteydenottosi on meille tärkeä, ja kokenut asiantuntijamme käsittelee sen mahdollisimman pian.',
        'urgent' => 'Kiireellisissä asioissa:',
        'phone' => 'Puhelin',
        'email' => 'Sähköposti',
        'hours' => 'Aukioloajat',
        'hours_value' => 'Ma-To 10-16, Pe verkossa 10-16',
        'regards' => 'Ystävällisin terveisin,',
        'visit' => 'Vieraile verkkosivuillamme',
        'url' => 'https://angeloy.fi',
    ];

    $body = '<!DOCTYPE html><html><head><style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: radial-gradient(circle,rgba(241, 197, 14, 1) 0%, rgba(255, 251, 28, 1) 50%, rgba(241, 197, 14, 1) 100%); color: black; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px; }
        .button{ display: inline-block; padding: 12px 24px; background: #f1c50e; color: black; text-decoration: none; border-radius: 5px; margin: 10px 5px; transition: background-color 0.3s ease, color 0.3s ease;}
        .button:hover { background: black; color: white; }
    </style></head><body>
        <div class="container">
            <div class="header"><h2>' . $t['title'] . '</h2></div>
            <div class="content">
                <p>' . $t['greeting'] . ' ' . htmlspecialchars($firstName) . ',</p>
                <p>' . $t['received'] . '</p>
                <p>' . $t['important'] . '</p>
                <div class="contact-info">
                    <h3>' . $t['urgent'] . '</h3>
                    <ul>
                        <li><strong>' . $t['phone'] . ':</strong> ' . COMPANY_PHONE . '</li>
                        <li><strong>' . $t['email'] . ':</strong> ' . COMPANY_EMAIL . '</li>
                        <li><strong>' . $t['hours'] . ':</strong> ' . $t['hours_value'] . '</li>
                    </ul>
                </div>
                <p>' . $t['regards'] . '<br><strong>' . COMPANY_NAME . '</strong></p>
                <div style="text-align: center;">
                    <a href="' . $t['url'] . '" class="button">' . $t['visit'] . '</a>
                </div>
            </div>
        </div>
    </body></html>';
    
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . encodeHeader(AUTO_REPLY_FROM_NAME) . ' <' . AUTO_REPLY_FROM_EMAIL . '>',
        'Reply-To: ' . COMPANY_EMAIL
    ];
    
    $sent = mail($email, encodeHeader($t['subject']), $body, implode("\r\n", $headers));
    logEmailSent($db, $submissionId, 'auto_reply', $email, $t['subject'], $sent);
    
    return $sent;
}

function logEmailSent($db, $submissionId, $type, $recipient, $subject, $success) {
    try {
        $stmt = $db->prepare("
            INSERT INTO email_log (submission_id, email_type, recipient_email, subject, status) 
            VALUES (?, ?, ?, ?, ?)
        ");
        $stmt->execute([$submissionId, $type, $recipient, $subject, $success ? 'sent' : 'failed']);
    } catch (Exception $e) {
        logError('Failed to log email', ['error' => $e->getMessage()]);
    }
}
?>