<?php
/**
 * Contact Form Handler with Database Storage
 * Angel Financial Services Oy
 */

define('ANGELOY_APP', true);
require_once 'config.php';

header('Content-Type: application/json; charset=utf-8');

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
            'message' => 'Liian monta yritystä. Odota hetki ja yritä uudelleen.'
        ], 429);
    }
    
    // Honeypot check
    if (ENABLE_HONEYPOT && !empty($_POST['website'])) {
        logSpam($db, $ip, $_POST['email'] ?? null, 'Honeypot triggered', $_POST);
        sendJSON(['success' => true, 'message' => 'Message sent']);
    }
    
    // Get and validate input
    $firstName = sanitize($_POST['firstName'] ?? '');
    $lastName = sanitize($_POST['lastName'] ?? '');
    $email = sanitize($_POST['email'] ?? '');
    $phone = sanitize($_POST['phone'] ?? '');
    $company = sanitize($_POST['company'] ?? '');
    $service = sanitize($_POST['service'] ?? '');
    $message = sanitize($_POST['message'] ?? '');
    
    $errors = [];
    
    if (empty($firstName)) $errors[] = 'Etunimi on pakollinen';
    if (empty($lastName)) $errors[] = 'Sukunimi on pakollinen';
    
    if (empty($email)) {
        $errors[] = 'Sähköposti on pakollinen';
    } elseif (!isValidEmail($email)) {
        $errors[] = 'Virheellinen sähköpostiosoite';
    }
    
    if (empty($message)) {
        $errors[] = 'Viesti on pakollinen';
    } elseif (strlen($message) < 10) {
        $errors[] = 'Viesti on liian lyhyt (vähintään 10 merkkiä)';
    } elseif (strlen($message) > 5000) {
        $errors[] = 'Viesti on liian pitkä (maksimi 5000 merkkiä)';
    }
    
    if (containsSpam($message) || containsSpam($firstName) || containsSpam($lastName)) {
        logSpam($db, $ip, $email, 'Spam keywords detected', $_POST);
        $errors[] = 'Viesti sisältää kiellettyä sisältöä';
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
            'message' => 'Olet jo lähettänyt tämän viestin. Jos kyseessä on kiireellinen asia, soita meille suoraan.'
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
        $phone, $company, $service, $message, $priority, $ip
    );
    
    if (!$emailSent) {
        logError('Failed to send notification email', [
            'submission_id' => $submissionId,
            'email' => $email
        ]);
    }
    
    // Send auto-reply
    if (SEND_AUTO_REPLY) {
        $autoReplySent = sendAutoReply($db, $submissionId, $email, $firstName);
        
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
        'message' => 'Kiitos viestistäsi! Otamme sinuun yhteyttä pian.',
        'submission_id' => $submissionId
    ]);
    
} catch (Exception $e) {
    logError('Contact form error', [
        'error' => $e->getMessage(),
        'trace' => $e->getTraceAsString()
    ]);
    
    sendJSON([
        'success' => false,
        'message' => 'Tapahtui virhe viestin lähetyksessä. Yritä myöhemmin uudelleen tai ota yhteyttä suoraan sähköpostitse.'
    ], 500);
}

// Helper functions
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

function sendNotificationEmail($db, $submissionId, $firstName, $lastName, $email, $phone, $company, $service, $message, $priority, $ip) {
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
        'From: ' . COMPANY_NAME . ' <' . AUTO_REPLY_FROM_EMAIL . '>',
        'Reply-To: ' . $firstName . ' ' . $lastName . ' <' . $email . '>',
        'X-Mailer: PHP/' . phpversion(),
        'X-Priority: ' . ($priority === 'high' || $priority === 'urgent' ? '1' : '3')
    ];
    
    $recipients = explode(',', NOTIFICATION_EMAILS);
    $success = true;
    
    foreach ($recipients as $recipient) {
        $recipient = trim($recipient);
        $sent = mail($recipient, $subject, $body, implode("\r\n", $headers));
        logEmailSent($db, $submissionId, 'notification', $recipient, $subject, $sent);
        if (!$sent) $success = false;
    }
    
    return $success;
}

function sendAutoReply($db, $submissionId, $email, $firstName) {
    $subject = 'Kiitos yhteydenotostasi - ' . COMPANY_NAME;
    
    $body = '<!DOCTYPE html><html><head><style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: radial-gradient(circle,rgba(241, 197, 14, 1) 0%, rgba(255, 251, 28, 1) 50%, rgba(241, 197, 14, 1) 100%); color: black; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px; }
        .button{ display: inline-block; padding: 12px 24px; background: #f1c50e; color: black; text-decoration: none; border-radius: 5px; margin: 10px 5px; transition: background-color 0.3s ease, color 0.3s ease;}
        .button:hover { background: black; color: white; }
    </style></head><body>
        <div class="container">
            <div class="header"><h2>Kiitos yhteydenotostasi!</h2></div>
            <div class="content">
                <p>Hei ' . htmlspecialchars($firstName) . ',</p>
                <p>Olemme vastaanottaneet viestisi ja otamme sinuun yhteyttä <strong>1-2 arkipäivän kuluessa</strong>.</p>
                <p>Yhteydenottosi on meille tärkeä, ja kokenut asiantuntijamme käsittelee sen mahdollisimman pian.</p>
                <div class="contact-info">
                    <h3>Kiireellisissä asioissa:</h3>
                    <ul>
                        <li><strong>Puhelin:</strong> ' . COMPANY_PHONE . '</li>
                        <li><strong>Sähköposti:</strong> ' . COMPANY_EMAIL . '</li>
                        <li><strong>Aukioloajat:</strong> Ma-Pe 9:00-17:00</li>
                    </ul>
                </div>
                <p>Ystävällisin terveisin,<br><strong>' . COMPANY_NAME . '</strong></p>
                <div style="text-align: center;">
                    <a href="https://angeloy.fi" class="button">Vieraile verkkosivuillamme</a>
                </div>
            </div>
        </div>
    </body></html>';
    
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . AUTO_REPLY_FROM_NAME . ' <' . AUTO_REPLY_FROM_EMAIL . '>',
        'Reply-To: ' . COMPANY_EMAIL,
        'X-Mailer: PHP/' . phpversion()
    ];
    
    $sent = mail($email, $subject, $body, implode("\r\n", $headers));
    logEmailSent($db, $submissionId, 'auto_reply', $email, $subject, $sent);
    
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