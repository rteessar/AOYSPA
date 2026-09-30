/* ========================================
   ANGEL FINANCIAL SERVICES - JAVASCRIPT
   ======================================== */

// === CONSTANTS ===
const SWIPER_CONFIG = {
    LOOP: false,
    EFFECT: 'fade',
    SPEED: 1000,
    AUTOPLAY_DELAY: 5000
};

// === TRANSLATION MODULE ===
const Translation = {
    currentLang: 'fi',
    
    data: {
        fi: {
        // Koti Page
        nav_koti: "Koti",
        nav_palvelut: "Palvelut",
        nav_meista: "Meistä",
        nav_tiimi: "Tiimi",
        nav_yhteystiedot: "Yhteystiedot",
        hero1_title: "Ensilento rajattomiin korkeuksiin, taloudelliset suojelusenkelisi.",
        hero1_subtitle: "Opastamme yrityksesi menestymään Suomessa.",
        hero2_subtitle: "Hyödy yli 6 vuoden erityisasiantuntemuksestamme suomalaisessa kirjanpidossa.",
        hero2_title: "Asiantuntemuksemme on luotettava etusi.",
        contact_button: "Ota yhteyttä",
        why_us_title: "Miksi valita Angel Financial Services?",
        why_us_text: "Angel Oy:ssä omaksumme eteenpäin katsovan lähestymistavan, joka perustuu tulevaisuuden potentiaaliin. Brändimme kuvastaa yritysten ohjaamista asiantuntevilla talousratkaisuilla, auttaen niitä näkemään talousmaisemansa selkeästi. Palveluvalikoimamme ulottuu perusliiketoimia pidemmälle.",
        why_us_box1: "Autamme sinua kaikessa osakeyhtiön (Oy) ja yksityisen yrityksen rekisteröintiin liittyvässä.",
        why_us_box2: "Hoidamme puolestasi kuukausikirjanpidon, ALV-laskelmat, ALV-raportit ja palkanlaskennan.",
        why_us_box3: "Kun sinä kehität ydinliiketoimintaasi, me huolehdimme taloudellisista monimutkaisuuksista yksinkertaistaen ne puolestasi.",
        service1_title: "Yritysrekisteröinti",
        service1_text: "Yrityksen perustaminen voi olla ylivoimaista. Jos sinulla on loistava liikeidea, mutta olet epävarma oikeasta yhtiömuodosta tai koet rekisteröinnin hämmentäväksi, älä huoli – me autamme sinua. Prosessiin liittyy usein byrokraattisia menettelyjä ja koordinointia eri viranomaisten kanssa, minkä voit jättää meidän huoleksemme.",
        service2_title: "Kuukausikirjanpito",
        service2_text: "Angel Financial Services Oy:ssä tarjoamme kattavan kuukausikirjanpitopalvelun, joka varmistaa, että talousasiasi ovat ammattitaitoisissa käsissä. Tiimimme kirjaa kaikki ostosi ja myyntisi nykyaikaisiin tietokonejärjestelmiimme. Laadimme yksityiskohtaiset tuloslaskelmat antaaksemme selkeän kuvan taloudellisesta tilanteestasi.",
        service3_title: "Tilinpäätös ja räätälöity kirjanpito",
        service3_text: "Yrityksen omistajana saatat usein tarkastella laajoja edellisen vuoden raportteja arvioidaksesi voittoasi tai tappiotasi. Omistautunut tiimimme yksinkertaistaa tämän prosessin puolestasi. Luomme raportit ja autamme sinua analysoimaan niitä.",
        service4_title: "Konsultaatiot ja strateginen neuvonta",
        service4_text: "Asiantuntijamme eri taustoilta auttavat sinua arvioimaan taloudellista tilannettasi ja tarjoavat arvokkaita näkemyksiä sekä neuvoja liiketoimintaasi. Olemme täällä auttaaksemme sinua. Olipa kyse sitten säännösten noudattamisesta, talousstrategioiden optimoinnista tai operatiivisten esteiden voittamisesta, tarjoamme toteuttamiskelpoisia ratkaisuja, jotka vastaavat juuri sinun yrityksesi tarpeita.",
        service5_title: "Älykäs palkanlaskenta ja henkilöstöhallinnon ratkaisut",
        service5_text: "Angel Oy:n palkanlaskentapalvelun tarkoituksena on varmistaa, että työntekijöillesi maksetaan korvaus tarkasti ja kaikkien lakisääteisten vaatimusten mukaisesti. Asiantuntijatiimimme laskee palkat ja palkkiot ammattitaitoisesti noudattaen Suomen työlakeja, työehtosopimuksia ja ammattiliittojen säännöksiä. Tämä auttaa sinua ylläpitämään positiivisia suhteita työntekijöihisi.",
        service6_title: "Verosuunnittelu ja optimointi",
        service6_text: "Tarjoamme asiantuntevia verosuunnittelustrategioita auttaaksemme yrityksiä vähentämään verovelvoitteita, maksimoimaan vähennyksiä ja varmistamaan täyden noudattamisen Suomen verolakien mukaisesti. Henkilökohtainen lähestymistapamme mahdollistaa tehokkaan verotuksen ennakoinnin ja suunnittelun, varmistaen että yritykset voivat tehdä tietoon perustuvia taloudellisia päätöksiä.",
        consult_title: "Konsultoimme johtajia strategiassa",
        consult_subtitle: "Sinun kasvusuhdanteesi, meidän intohimomme.",
        stat1_title: "Vuosien kokemus",
        stat2_title: "Palvelukieliä",
        stat3_title: "Tyytyväiset Asiakkaat",
        stat4_title: "Perustetut yritykset",
        contact_button_2: "Ota yhteyttä",
        footer_slogan: "Taloudelliset suojelusenkelisi.",
        privacy_policy: "Tietosuojaseloste",
        termsofservice: "Käyttöehdot",
        faq: "Usein Kysytyt Kysymykset",
        footer_copyright: "{year} © Angel Financial Services Oy. Kaikki oikeudet pidätetään.",
        
        // Palvelut Page
        palvelut_hero_slogan1_1: "Sinun",
        palvelut_hero_slogan1_2: "matkasi,",
        palvelut_hero_slogan2_1: "Meidän",
        palvelut_hero_slogan2_2: "tietämyksemme.",
        palvelut_s2_title: "Yrityksen rekisteröinti",
        palvelut_s2_text: `<p>Yrityksen perustaminen voi olla ylivoimaista. Jos sinulla on loistava liikeidea, mutta olet epävarma oikeasta yhtiömuodosta tai rekisteröinti tuntuu hämmentävältä, älä huoli – et ole yksin. Prosessiin liittyy usein byrokraattisia menettelyjä ja koordinointia eri viranomaisten kanssa, jolloin saatat miettiä, mistä ja miten aloittaa yrittäjän matkasi.</p><br><p>Angel Financial Services Oy:ssä ymmärrämme nämä haasteet ja olemme täällä yksinkertaistamassa tätä matkaa puolestasi. Asiantuntijamme opastavat sinua yrityksen ilmoittamis- ja rekisteröintiprosessissa vapauttaen sinut hallinnollisista taakoista. Tarjoamme arvokkaita neuvoja auttaaksemme sinua määrittämään toimintaasi parhaiten soveltuvan yhtiömuodon.</p><br><p> Mietitkö toiminimeä vai osakeyhtiötä(Oy)? Oletko huolissasi lakisääteisistä vaatimuksista ja vaatimustenmukaisuudesta? Annamme vastauksia näihin kysymyksiin varmistaen, että voit perustaa uuden yrityksesi vankalle pohjalle, varustettuna menestyksekkääseen aloitukseen tarvittavalla tiedolla ja tuella.</p>`,
        palvelut_s3_title: "Kuukausikirjanpito",
        palvelut_s3_text: `<p>Angel Financial Services Oy:ssä tarjoamme kattavan kuukausikirjanpitopalvelun, joka varmistaa, että talousasiasi ovat ammattitaitoisissa käsissä. Tiimimme kirjaa kaikki ostosi ja myyntisi ja suorittaa selkeät ALV-laskelmat. Mutta emme pysähdy siihen – menemme pelkkiä numeroita pidemmälle. Laadimme yksityiskohtaiset tuloslaskelmat antaaksemme selkeän kuvan taloudellisesta tilanteestasi. Lisäksi palvelumme ulottuu taloudellisen tilanteesi arviointiin ja tarjoaa arvokkaita näkemyksiä sekä neuvoja liiketoimintaasi.</p><br><p>Mietitkö, miten suunnitella tulevaisuutta? Me autamme sinua. Palveluihimme sisältyy myös apu tulevien toimintojen kartoittamisessa. Analysoimme kuukausittaiset tulosi ja menosi ja tarjoamme käytännön suosituksia kannattavuuden parantamiseksi ja kulujen minimoimiseksi.</p><br><p>Oletko huolissasi yrityksesi taloudellisesta hyvinvoinnista? Kuukausikirjanpitopalvelumme on suunniteltu tarjoamaan sinulle tiedot ja opastuksen, joita tarvitset tietoisten päätösten tekemiseen. Anna meidän hoitaa yrityksesi numerot.</p>`,
        palvelut_s4_title: "Tilinpäätös ja räätälöity kirjanpito",
        palvelut_s4_text: "<p>Yrittäjänä saatat usein joutua käymään läpi laajoja kirjanpitoaineistoja menneeltä vuodelta arvioidaksesi voittoasi tai tappiotasi. Omistautunut tiimimme yksinkertaistaa tämän prosessin puolestasi. Laadimme huolellisesti lopulliset tilinpäätösraportit, joiden avulla saat kattavan käsityksen taloudellisesta tuloksestasi. Mutta se ei lopu siihen. </p><br><p>Autamme sinua myös analysoimaan näitä raportteja. Miten yrityksesi voi hyötyä yksityiskohtaisista tilinpäätöksistämme? Mitä oivalluksia voit saada analyysimme avulla? Lisäksi varmistamme, että tilinpäätösraporttisi täyttävät kaikki lakisääteiset vaatimukset.</p><br><p> Tiimimme hoitaa paperityöt, laatien ja toimittaen kaikki tarvittavat ilmoitukset veroviranomaisille. Angel Financial Services Oy:n avulla selviät vaivattomasti tilinpäätösten monimutkaisuudesta ja tilikauden päättämisestä. Anna meidän olla oppaasi taloudelliseen läpinäkyvyyteen ja vaatimustenmukaisuuteen. Miten palvelumme voivat tehostaa talousraportointiasi? Miten voimme auttaa sinua tekemään tietoon perustuvia päätöksiä taloustietojesi pohjalta? Olemme täällä antaaksemme tarvitsemasi vastaukset.</p>",
        palvelut_s5_title: "Konsultaatiot ja strateginen neuvonta",
        palvelut_s5_text: `<p>Angel Financial Services Oy:n konsultointipalvelut on räätälöity antamaan yrityksellesi asiantuntevaa ohjausta ja käytännön oivalluksia. Tiimimme koostuu eri taustoista tulevista jäsenistä, joista jokainen tuo mukanaan runsaasti tietoa ja realistisen näkökulman. Tämä ainutlaatuinen kokemusten yhdistelmä antaa meille mahdollisuuden tarjota sinulle relevanttia ohjausta ja asianmukaisia neuvoja liiketoiminnan eri osa-alueisiin Suomessa.</p><br><p>Kohtaatko haasteita liiketoiminnassasi? Mietitkö, miten navigoida Suomen liike-elämän vaikeuksissa? Asiantuntijamme ovat täällä auttamassa sinua. Olipa kyse sitten lainsäädannön noudattamisesta, talousstrategioiden optimoinnista tai operatiivisten esteiden voittamisesta, tarjoamme toteuttamiskelpoisia ratkaisuja, jotka vastaavat juuri sinun yrityksesi tarpeita.</p>`,
        palvelut_s6_title: "Älykäs palkanlaskenta ja henkilöstöhallinnon ratkaisut",
        palvelut_s6_text: `<p>Angel Oy:n palkanlaskentapalvelun tarkoituksena on varmistaa, että työntekijäsi saavat korvauksensa tarkasti ja kaikkien lakisääteisten vaatimusten mukaisesti. Asiantuntijatiimimme laskee palkat ammattitaitoisesti noudattaen Suomen työlainsäädäntöä, työehtosopimuksia ja ammattiliittojen säännöksiä. Tämä auttaa sinua paitsi täyttämään lakisääteiset velvoitteesi, myös ylläpitämään positiivisia suhteita työntekijöihisi estämällä mahdolliset juridiset ristiriidat.</p><br><p>Tarkkojen palkanlaskentojen lisäksi tarjoamme tukea rekrytointiprosessissa. Tähän sisältyy apu yrityksesi työsopimusten kanssa. Kattavan palkanlaskentapalvelumme ansiosta työntekijöillesi maksetaan palkka oikein ja ajallaan. Angel Oy:n avulla voit luottaa siihen, että palkanlaskentasi on osaavissa käsissä, mikä tuo sekä taloudellista tarkkuutta että mielenrauhaa.</p>`,
        palvelut_s7_title: "Verosuunnittelu ja optimointi",
        palvelut_s7_text: `<p>Angel Oy:n arvonlisäverolaskelmat ja ALV-raportit -palvelu on suunniteltu hoitamaan yksi yritysten taloushallinnon kriittisimmistä osa-alueista. Ymmärrämme, että ALV:n laskeminen ja tarkkojen ALV-raporttien laatiminen voi olla monimutkainen ja aikaa vievä tehtävä. Tässä kohtaa astumme kuvaan.</p><br><p>Omistautunut ammattilaistiimimme poistaa ALV-laskelmien vaivan seuraamalla kaikkia ostojasi ja myyntejäsi. Takaamme, että ALV-velvoitteesi täytetään Suomen verosäännösten mukaisesti, jotta voit keskittyä ydinliiketoimintaasi murehtimatta vaatimustenmukaisuudesta.</p><br><p>ALV-palvelumme on suunniteltu virtaviivaistamaan talousprosessejasi, minimoimaan virheriskejä ja varmistamaan veroviranomaisten vaatimusten noudattamisen. Angel Oy:n avulla voit luottaa siihen, että ALV-laskelmasi ja -raporttisi ovat tarkkoja ja ajantasaisia, mikä tuo sinulle taloudellista selkeyttä ja luottamusta taloushallintoosi.</p>`,
        contact_button_3: "Ota yhteyttä",

        // Meistä Page
        meista_s1_title: "Meistä",
        meista_s1_text: `<p>Angel Financial Services Oy:n toiminnan keskiössä on pienten ja keskisuurten yritysten tukeminen ja kehittäminen taloushallinnon ja veroraportoinnin osa-alueilla. Menestyksen määrittävät ensisijaisesti numerot, ja syvällinen ymmärryksemme niistä ja kirjanpidosta antaa meille mahdollisuuden tarjota käytännönläheisiä ratkaisuja yritysten omistajille, jotka etsivät apua yrityksensä johtamiseen sekä kannattavuuden ja kasvun.</p><p>Ydinpalveluihimme kuuluu kirjanpito- ja yritysosaamisemme hyödyntäminen seuraavissa palveluissa: päivittäiset kirjanpitopalvelut, veroviranomaisraporttien laatiminen, arvonlisäveron ja palkkojen laskeminen sekä talousraporttien toimittaminen viranomaisille ja yrittäjille.</p>`,
        meista_s2_title: "Toimintatapamme",
        meista_s2_subtitle: "Yhteistyöllä kohta menestystä",
        meista_s2_text: "Angel-tiimi tarjoaa täyden tuen taloushallinnon ja verotuksen osa-alueilla, jotta voitte keskittää arvokkaan aikanne ydinliiketoimintanne kehittämiseen. Voitte keskittyä liiketoimintatavoitteidenne saavuttamiseen, kun me hoidamme taloudelliset tehtävät.",
        meista_s3_title: "Vaivatonta asiointia",
        meista_s3_subtitle: "Palvelut juuri sinulle sopivasti",
        meista_s3_text: "Kaikki palvelumme ovat saatavilla myös digitaalisesti, mikä mahdollistaa helpon yhteydenpidon ja asioiden seurannan mukavasti kotoanne käsin, säästäen teidät ylimääräiseltä vaivalta. Tarvittaessa järjestämme kanssanne myös henkilökohtaisia tapaamisia.",
        meista_s4_title: "Tarvitsetko apua? Ota yhteyttä!",
        meista_soita: "Soita: ",
        meista_s4_text: "tai ota yhteyttä alhalla olevan lomakkeen kautta.",
        meista_s4_button: "VARAA AIKAA",
        meista_s5_title: "Keskity menestykseen – me hoidamme numerot.",
        meista_s5_subtitle: "Ota yhteyttä, niin autamme sinua jo tänään!",
        meista_s5_firstname_placeholder: "Etunimi",
        meista_s5_lastname_placeholder: "Sukunimi",
        meista_s5_email_placeholder: "Sähköpostiosoitteesi",
        meista_s5_button: "Lähetä",
        meista_s5_text_right: "Olemme luotettava talouskumppanisi. Autamme yritystäsi saavuttamaan kannattavuuden, kasvun ja pitkäaikaisen menestyksen.",
        

        // Tiimi Page
        tiimi_s1_title: "Monikulttuurinen ja rikas mosaiikki",
        tiimi_s1_subtitle: "Angel-tiimin voima on sen ihmisissä: kokeneissa kirjanpitäjissä, yrittäjissä ja strategisissa neuvonantajissa. Meitä yhdistää yksi tavoite: tukea yrityksesi menestystä.",
        tiimi_s1_button1: "Palvelut",
        tiimi_s1_button2: "Ota Yhteyttä",
        tiimi_s2_title: "Team Angel",
        member1_name: "Laivi Ijeh",
        member1_title: "Toimitusjohtaja, \nKirjanpitäjä",
        member1_desc: '<p>Laivilla on taloushallinnon ammattitutkinto, ja hän on tehnyt intohimostaan numeroiden parissa palkitsevan uran. Vuosien varrella hän on hankkinut laajaa kokemusta kirjanpidosta työskennellen sekä kansainvälisten konsernien että pienten suomalaisten yritysten kanssa.</p><br><p>Laivi on ylpeä voidessaan tarjota asiakkailleen tarkkaa, selkeää ja helposti ymmärrettävää taloushallinnon palvelua. Hänet tunnetaan omistautuneisuudestaan ja huolellisuudestaan – ja hän elää mottonsa mukaan: “Jos teet jotain, tee se hyvin.”</p>',
        member2_name: "Talal Mohammed",
        member2_title: "Johtava veronasiantuntija \nja \nvaatimustenmukaisuusasiantuntija",
        member2_desc: "<p>Talal on suorittanut kaksi kauppatieteiden kandidaatin tutkintoa, pääaineenaan rahoitus, Metropolia Ammattikorkeakoulussa ja HTW University Berlinissä. Hän on entinen yrittäjä kuljetus- ja logistiikka-alalla, missä hän sai arvokasta käytännön kokemusta sekä vahvan ymmärryksen toiminnan ja taloushallinnon kokonaisuudesta.</p><br><p>Vuosien varrella Talal on kehittänyt laajaa osaamista kirjanpidossa eri toimialoilta, yhdistäen käytännön liiketoimintaosaamisen huolelliseen ja asiakaslähtöiseen työskentelytapaan. Työskentely eritaustaisten ja kansainvälisten asiakkaiden kanssa on myös syventänyt hänen kykyään ymmärtää ja vastata jokaisen asiakkaan yksilöllisiin tarpeisiin selkeästi, empaattisesti ja ammattimaisesti.</p>",
        member3_name: "Hanna Räsänen",
        member3_title: "Johtava \ntalousneuvonantaja",
        member3_desc: "Hän on taloushallinnon ammattilainen, joka nauttii siitä, kun luvut ovat kohdillaan ja prosessit toimivat saumattomasti. Hänen vahva osaamisensa kattaa kirjanpidon, ostoreskontran, myyntireskontran ja perinnän. Hänen työskentelyssään yhdistyvät tarkkuus, vastuullisuus ja aito halu löytää sujuvia ratkaisuja arjen taloushallinnon haasteisiin. Hänelle on tärkeää tehdä työnsä huolellisesti ja asiakaslähtöisesti. Hän uskoo, että parhaat tulokset syntyvät hyvästä yhteistyöstä ja avoimesta viestinnästä. Hänen äidinkielensä on suomi, ja hän puhuu sujuvasti englantia, mikä auttaa häntä toimimaan tehokkaasti myös kansainvälisessä ympäristössä.",
        member4_name: "Teele Kullerkann",
        member4_title: "Kirjanpitäjä \nja \ntalousanalyytikkö",
        member4_desc: "",
        member5_name: "Leena Bansal",
        member5_title: "Kirjanpitäjä \nja \ntalousanalyytikkö",
        member5_desc: "Leena on kokenut kirjanpidon ja taloushallinnon ammattilainen, jolla on yli 10 vuoden asiantuntemus Intiasta, jota täydentää käytännön kokemus Suomesta. Hän on erikoistunut keskeisiin taloushallinnon toimintoihin, kuten raportointiin, mukaan lukien taseiden ja tuloslaskelmien laatiminen, sekä budjetointiin, tilintarkastukseen ja kokonaisvaltaisiin kirjanpitopalveluihin. Syvällisen talousprosessien tuntemuksensa lisäksi hän on erittäin taitava palkanlaskennassa, laskutuksessa ja päivittäisissä kirjanpitotehtävissä. Hän käyttää sujuvasti johtavia kirjanpito-ohjelmistoja, kuten Procountoria, ja sopeutuu nopeasti paikallisiin säännöksiin ja vaatimuksiin.",

         // Yhteystiedot Page
        contact_s1_title: "Yhteystiedot",
        contact_s1_phone_title: "Puhelinnumero",
        contact_s1_phone_number: "+358 40 129 1041",
        contact_s1_address_title: "Osoite",
        contact_s1_address_text: "Ruosilantie 1 A 00390, Helsinki Finland",
        contact_s1_hours_title: "Aukioloajat",
        contact_s1_hours_mon_thu: "Maanantai - Torstai 10-16",
        contact_s1_hours_fri: "Perjantai verkossa 10-16",
        contact_s1_hours_sat_sun: "Lauantai - Sunnuntai SULJETTU",
        contact_s1_form_firstname_placeholder: "Etunimi",
        contact_s1_form_lastname_placeholder: "Sukunimi",
        contact_s1_form_phone_placeholder: "Puhelinnumero",
        contact_s1_form_email_placeholder: "Sähköpostiosoitteesi",
        contact_s1_form_company_placeholder: "Yrityksen nimi",
        contact_s1_form_service_placeholder: "Palvelu",
        contact_s1_form_service_default: "Palvelu, josta olet kiinnostunut",
        contact_s1_form_service_accounting: "Kuukausikirjanpito",
        contact_s1_form_service_payroll: "Palkanlaskenta",
        contact_s1_form_service_registration: "Yritysrekisteröinti",
        contact_s1_form_service_financial: "Tilinpäätös",
        contact_s1_form_service_tax: "Verosuunnittelu",
        contact_s1_form_service_consulting: "Konsultointi",
        contact_s1_form_service_other: "Muu palvelu",
        contact_s1_form_message_placeholder: "Viestisi",
        contact_s1_form_button: "Lähetä",

        // Shared UI
        skip_link: "Siirry sisältöön",
        logo_home: "Angel Financial Services - Etusivu",
        menu_label: "Mobiilivalikko",
        menu_open: "Avaa valikko",
        menu_close: "Sulje valikko",
        close_button: "Sulje",
        slider_prev: "Edellinen dia",
        slider_next: "Seuraava dia",
        slider_pause: "Pysäytä diaesitys",
        slider_play: "Käynnistä diaesitys",
        form_sending: "Lähetetään...",
        form_success: "Kiitos viestistäsi! Otamme sinuun yhteyttä pian.",
        form_error: "Viestin lähetyksessä tapahtui virhe. Yritä uudelleen tai ota yhteyttä suoraan sähköpostitse: info@angeloy.fi",
    },
    en: {
        // Koti Page
        nav_koti: "Home",
        nav_palvelut: "Services",
        nav_meista: "About Us",
        nav_tiimi: "Team",
        nav_yhteystiedot: "Contact",
        hero1_title: "First flight to limitless heights, your financial guardian angels.",
        hero1_subtitle: "We guide your company to succeed in Finland.",
        hero2_subtitle: "Benefit from our 6+ years of special expertise in Finnish accounting.",
        hero2_title: "Our expertise is your reliable advantage.",
        contact_button: "Contact Us",
        why_us_title: "Why Choose Angel Financial Services?",
        why_us_text: "At Angel Oy, we adopt a forward-looking approach based on future potential. Our brand reflects guiding companies with expert financial solutions, helping them to see their financial landscape clearly. Our range of services extends beyond basic business transactions.",
        why_us_box1: "We help you with everything related to registering a limited liability company (Oy) and a private enterprise.",
        why_us_box2: "We handle monthly accounting, VAT calculations, VAT reports, and payroll on your behalf.",
        why_us_box3: "While you develop your core business, we take care of financial complexities, simplifying them for you.",
        service1_title: "Company Registration",
        service1_text: "Starting a business can be overwhelming. If you have a great business idea but are unsure of the right company form or find the registration confusing, don't worry – we are here to help. The process often involves bureaucratic procedures and coordination with various authorities, which you can leave to us.",
        service2_title: "Monthly Bookkeeping",
        service2_text: "At Angel Financial Services Oy, we offer a comprehensive monthly bookkeeping service that ensures your finances are in professional hands. Our team records all your purchases and sales in our modern computer systems. We prepare detailed income statements to give a clear picture of your financial situation.",
        service3_title: "Financial Statements and Custom Accounting",
        service3_text: "As a business owner, you may often review extensive reports from the previous year to assess your profit or loss. Our dedicated team simplifies this process for you. We create the reports and help you analyze them.",
        service4_title: "Consultations and Strategic Advice",
        service4_text: "Our experts from various backgrounds help you assess your financial situation and offer valuable insights and advice for your business. We are here to help you. Whether it's regulatory compliance, optimizing financial strategies, or overcoming operational hurdles, we provide actionable solutions that meet the specific needs of your company.",
        service5_title: "Smart Payroll and HR Solutions",
        service5_text: "Angel Oy's payroll service is designed to ensure that your employees are compensated accurately and in accordance with all legal requirements. Our expert team professionally calculates wages and salaries, adhering to Finnish labor laws, collective agreements, and trade union regulations. This helps you maintain positive relationships with your employees.",
        service6_title: "Tax Planning and Optimization",
        service6_text: "We offer expert tax planning strategies to help businesses reduce tax liabilities, maximize deductions, and ensure full compliance with Finnish tax laws. Our personalized approach enables effective tax forecasting and planning, ensuring that companies can make informed financial decisions.",
        consult_title: "We Consult Leaders on Strategy",
        consult_subtitle: "Your growth cycle, our passion.",
        stat1_title: "Years of experience",
        stat2_title: "Languages",
        stat3_title: "Satisfied customers",
        stat4_title: "Companies established",
        contact_button_2: "Contact Us",
        footer_slogan: "Your financial guardian angels.",
        privacy_policy: "Privacy policy",
        termsofservice: "Terms of Service",
        faq: "FAQ",
        footer_copyright: "{year} © Angel Financial Services Oy. All rights reserved.",

        // Palvelut Page
        palvelut_hero_slogan1_1: "Your",
        palvelut_hero_slogan1_2: "journey,",
        palvelut_hero_slogan2_1: "Our",
        palvelut_hero_slogan2_2: "expertise.",
        palvelut_s2_title: "Company Registration",
        palvelut_s2_text: `<p>Starting a business can be overwhelming. If you have a great business idea but are unsure of the right company form or find the registration confusing, don't worry – you are not alone. The process often involves bureaucratic procedures and coordination with various authorities, leaving you wondering where and how to begin your entrepreneurial journey.</p><br><p>At Angel Financial Services Oy, we understand these challenges and are here to simplify this journey for you. Our experts will guide you through the company notification and registration process, freeing you from administrative burdens. We provide valuable advice to help you determine the most suitable company form for your operations. Are you considering a sole proprietorship or a limited liability company (Oy)? Worried about legal requirements and compliance? We provide answers to these questions, ensuring you can establish your new business on a solid foundation, equipped with the knowledge and support needed for a successful start.</p>`,
        palvelut_s3_title: "Monthly Bookkeeping",
        palvelut_s3_text: `<p>At Angel Financial Services Oy, we offer a comprehensive monthly bookkeeping service that ensures your finances are in professional hands. Our team records all your purchases and sales and performs clear VAT calculations. But we don't stop there – we go beyond mere numbers. We prepare detailed income statements to give a clear picture of your financial situation. Additionally, our service extends to assessing your financial situation and offering valuable insights and advice for your business.</p><br><p>Wondering how to plan for the future? We can help. Our services also include assistance in mapping out future operations. We analyze your monthly income and expenses and provide practical recommendations to improve profitability and minimize costs.</p><br><p>Are you concerned about the financial well-being of your company? Our monthly bookkeeping service is designed to provide you with the information and guidance you need to make informed decisions. Let us handle your company's numbers.</p>`,
        palvelut_s4_title: "Financial Statements and Custom Accounting",
        palvelut_s4_text: "<p>As an entrepreneur, you may often find yourself wading through extensive accounting records from the past year to assess your profit or loss. Our dedicated team simplifies this process for you. We meticulously prepare the final financial statement reports, giving you a comprehensive understanding of your financial performance. But it doesn’t end there. We also assist you in analyzing these reports. How can your business benefit from our detailed financial statements? What insights can you gain from our analysis? Furthermore, we ensure that your financial statement reports meet all legal requirements. Our team handles the paperwork, preparing and submitting all necessary declarations to the tax authorities.</p><br><p> With Angel Financial Services Oy, you can effortlessly navigate the complexities of financial statements and year-end closing. Let us be your guide to financial transparency and compliance. How can our services enhance your financial reporting? How can we help you make informed decisions based on your financial data? We are here to provide the answers you need.</p>",
        palvelut_s5_title: "Consultations and Strategic Advice",
        palvelut_s5_text: `<p>Angel Financial Services Oy's consulting services are tailored to provide your company with expert guidance and practical insights. Our team consists of members from various backgrounds, each bringing a wealth of knowledge and a realistic perspective. This unique combination of experiences allows us to offer you relevant guidance and appropriate advice on various aspects of business in Finland.</p><br><p>Are you facing challenges in your business? Wondering how to navigate the complexities of the Finnish business environment? Our experts are here to help you. Whether it's regulatory compliance, optimizing financial strategies, or overcoming operational hurdles, we provide actionable solutions that meet the specific needs of your company.</p>`,
        palvelut_s6_title: "Smart Payroll and HR Solutions",
        palvelut_s6_text: `<p>Angel Oy's payroll service is designed to ensure that your employees are compensated accurately and in accordance with all legal requirements. Our expert team professionally calculates salaries, adhering to Finnish labor laws, collective agreements, and trade union regulations. This not only helps you meet your legal obligations but also maintain positive relationships with your employees by preventing potential legal conflicts.</p><br><p>In addition to accurate payroll calculations, we offer support in the recruitment process. This includes assistance with your company's employment contracts. With our comprehensive payroll service, your employees are paid correctly and on time. With Angel Oy, you can trust that your payroll is in capable hands, providing both financial accuracy and peace of mind.</p>`,
        palvelut_s7_title: "Tax Planning and Optimization",
        palvelut_s7_text: `<p>Angel Oy's VAT calculations and VAT reports service is designed to handle one of the most critical areas of business financial management. We understand that calculating VAT and preparing accurate VAT reports can be a complex and time-consuming task. This is where we step in.</p><br><p>Our dedicated team of professionals takes the hassle out of VAT calculations by tracking all your purchases and sales. We ensure that your VAT obligations are met in accordance with Finnish tax regulations, so you can focus on your core business without worrying about compliance. Our VAT service is designed to streamline your financial processes, minimize the risk of errors, and ensure compliance with tax authorities' requirements. With Angel Oy, you can be confident that your VAT calculations and reports are accurate and up-to-date, providing you with financial clarity and confidence in your financial management.</p>`,
        contact_button_3: "Contact Us",

        // Meistä Page
        meista_s1_title: "About Us",
        meista_s1_text: `<p>At the core of Angel Financial Services Oy's operations is the support and development of small and medium-sized enterprises in the areas of financial administration and tax reporting. Success is primarily defined by numbers, and our deep understanding of them and accounting allows us to offer practical solutions to business owners seeking help in managing their company for profitability and growth.</p><p>Our core services include leveraging our accounting and business expertise in the following areas: daily accounting services, preparation of tax authority reports, calculation of value-added tax and salaries, and submission of financial reports to authorities and entrepreneurs.</p>`,
        meista_s2_title: "Our Approach",
        meista_s2_subtitle: "Collaborating towards success",
        meista_s2_text: "The Angel team offers full support in financial administration and taxation, so you can focus your valuable time on developing your core business. You can concentrate on achieving your business goals while we handle the financial tasks.",
        meista_s3_title: "Effortless Service",
        meista_s3_subtitle: "Services tailored just for you",
        meista_s3_text: "All our services are also available digitally, allowing for easy communication and monitoring of matters from the comfort of your home, saving you extra hassle. If necessary, we also arrange personal meetings with you.",
        meista_s4_title: "Need help? Contact us!",
        meista_soita: "Call us: ",
        meista_s4_text: "or contact us through the form below.",
        meista_s4_button: "BOOK A TIME",
        meista_s5_title: "Focus on success – we'll handle the numbers.",
        meista_s5_subtitle: "Contact us, and we'll help you today!",
        meista_s5_firstname_placeholder: "First Name",
        meista_s5_lastname_placeholder: "Last Name",
        meista_s5_email_placeholder: "Your email address",
        meista_s5_button: "Send",
        meista_s5_text_right: "We are your reliable financial partner. We help your company achieve profitability, growth, and long-term success.",
        
        // Tiimi Page
        tiimi_s1_title: "A Multicultural and Rich Mosaic",
        tiimi_s1_subtitle: "The strength of the Angel team lies in its people: experienced accountants, entrepreneurs, and strategic advisors. We are united by one goal: to support your company's success.",
        tiimi_s1_button1: "Services",
        tiimi_s1_button2: "Contact Us",
        tiimi_s2_title: "Team Angel",
        member1_name: "Laivi Ijeh",
        member1_title: "CEO, \nAccountant",
        member1_desc: `With a vocational degree in financial administration, Laivi enjoys working with numbers and considers her work a hobby. She has extensive experience in accounting and has worked for both international and small companies in Finland. Laivi's goal is to offer clients accurate and user-friendly service, as her motto is, "if you do something, do it well!"`,
        member2_name: "Talal Mohammed",
        member2_title: "Senior Tax Advisor \n& \nCompliance Specialist",
        member2_desc: "<p>Talal holds two Bachelor's degrees in Business Administration with a major in Finance from Metropolia University of Applied Sciences and HTW University Berlin. He is a former entrepreneur in the transport and logistics industry, where he gained extensive hands-on experience and developed a strong understanding of operational and financial management.</p><br><p>Throughout his career, Talal has developed strong expertise in accounting across different sectors, combining practical industry knowledge with a detail-oriented and client-centered approach. His solid background in the transport and taxi sector enables him to provide reliable and up-to-date accounting services tailored to industry-specific needs.</p><br><p>Working with clients from diverse cultural and international backgrounds has further strengthened his ability to understand and respond to each client’s specific needs with clarity, empathy, and precision.</p>",
        member3_name: "Hanna Räsänen",
        member3_title: "Senior \nFinancial Consultant",
        member3_desc: "She is a financial administration professional who enjoys ensuring that figures are accurate and processes run seamlessly. Her strong expertise covers accounting, accounts payable, accounts receivable, and debt collection. Her approach to work combines precision, responsibility, and a genuine desire to find smooth solutions for everyday financial challenges. It is important for her to perform her duties carefully and with a customer-oriented focus. She believes that the best results are achieved through good collaboration and open communication. As a native Finnish speaker who is also fluent in English, she works effectively in international environments.",
        member4_name: "Teele Kullerkann",
        member4_title: "Accountant \n& \nfinancial advisor",
        member4_desc: "",
        member5_name: "Leena Bansal",
        member5_title: "Accountant \n& \nfinancial advisor",
        member5_desc: "Leena is an experienced accounting and finance professional with over 10 years of expertise in India, complemented by recent hands-on experience in Finland. She specializes in key financial operations such as reporting, including the preparation of balance sheets and profit & loss statements, as well as budgeting, auditing, and complete bookkeeping services. In addition to her deep knowledge of financial processes, she is highly skilled in payroll management, invoicing, and day-to-day accounting operations. She is proficient with leading accounting software, including Procountor, and adapts quickly to local compliance requirements.",

         // Yhteystiedot Page
        contact_s1_title: "Contact Information",
        contact_s1_phone_title: "Phone Number",
        contact_s1_phone_number: "+358 40 129 1041",
        contact_s1_address_title: "Address",
        contact_s1_address_text: "Ruosilantie 1 A 00390, Helsinki Finland",
        contact_s1_hours_title: "Opening Hours",
        contact_s1_hours_mon_thu: "Monday - Thursday 10-16",
        contact_s1_hours_fri: "Friday online 10-16",
        contact_s1_hours_sat_sun: "Saturday - Sunday CLOSED",
        contact_s1_form_firstname_placeholder: "First Name",
        contact_s1_form_lastname_placeholder: "Last Name",
        contact_s1_form_phone_placeholder: "Phone Number",
        contact_s1_form_company_placeholder: "Company Name",
        contact_s1_form_service_placeholder: "Service",
        contact_s1_form_service_default: "Service you are interested in",
        contact_s1_form_service_accounting: "Monthly accounting",
        contact_s1_form_service_payroll: "Payroll",
        contact_s1_form_service_registration: "Company registration",
        contact_s1_form_service_financial: "Financial statements",
        contact_s1_form_service_tax: "Tax planning",
        contact_s1_form_service_consulting: "Consulting",
        contact_s1_form_service_other: "Other service",
        contact_s1_form_email_placeholder: "Your Email Address",
        contact_s1_form_message_placeholder: "Your Message",
        contact_s1_form_button: "Send",

        // Shared UI
        skip_link: "Skip to content",
        logo_home: "Angel Financial Services - Home",
        menu_label: "Mobile menu",
        menu_open: "Open menu",
        menu_close: "Close menu",
        close_button: "Close",
        slider_prev: "Previous slide",
        slider_next: "Next slide",
        slider_pause: "Pause slideshow",
        slider_play: "Play slideshow",
        form_sending: "Sending...",
        form_success: "Thank you for your message! We will get back to you soon.",
        form_error: "Something went wrong while sending your message. Please try again or email us directly at info@angeloy.fi",

    },
    et: {
         // Koti Page
        nav_koti: "Kodu",
        nav_palvelut: "Teenused",
        nav_meista: "Meist",
        nav_tiimi: "Meeskond",
        nav_yhteystiedot: "Kontakt",
        hero1_title: "Esmalend piiritutesse kõrgustesse, teie finantsasjade kaitseinglid.",
        hero1_subtitle: "Aitame teie ettevõttel Soomes edu saavutada.",
        hero2_subtitle: "Kasutage meie enam kui 6-aastast erialast asjatundlikkust Soome raamatupidamises.",
        hero2_title: "Meie asjatundlikkus on teie usaldusväärne eelis.",
        contact_button: "Võta ühendust",
        why_us_title: "Miks valida Angel Financial Services?",
        why_us_text: "Angel Oy's lähtume tulevikku vaatavast lähenemisest, mis põhineb tuleviku potentsiaalil. Meie bränd peegledab ettevõtete juhendamist asjatundlike finantslahendustega, aidates neil oma finantsmaastikku selgelt näha. Meie teenuste valik ulatub kaugemale tavapärastest äritehingutest.",
        why_us_box1: "Aitame teid kõiges, mis on seotud osaühingu (Oy) ja eraettevõtte registreerimisega.",
        why_us_box2: "Tegeleme teie eest igakuise raamatupidamise, käibemaksuarvestuse, käibemaksuaruannete ja palgaarvestusega.",
        why_us_box3: "Samal ajal kui teie arendate oma põhitegevust, hoolitseme meie finantskeerukuste eest, lihtsustades neid teie jaoks.",
        service1_title: "Ettevõtte registreerimine",
        service1_text: "Ettevõtte asutamine võib olla üle jõu käiv. Kui teil on suurepärane äriidee, kuid olete ebakindel õige ettevõtlusvormi osas või peate registreerimist segaseks, ärge muretsege – meie aitame teid. Protsess hõlmab sageli bürokraatlikke protseduure ja kooskõlastamist erinevate ametiasutustega, mille võite jätta meie hooleks.",
        service2_title: "Igakuine raamatupidamine",
        service2_text: "Angel Financial Services Oy pakub laiaulatuslikku igakuist raamatupidamisteenust, mis tagab, et teie finantsasjad on professionaalsetes kätes. Meie meeskond kannab kõik teie ostud ja müügid meie kaasaegsetesse arvutisüsteemidesse. Koostame üksikasjalikud kasumiaruanded, et anda selge ülevaade teie finantsolukorrast.",
        service3_title: "Majandusaasta aruanded ja kohandatud raamatupidamine",
        service3_text: "Ettevõtte omanikuna võite sageli vaadata eelmise aasta laiaulatuslikke aruandeid, et hinnata oma kasumit või kahjumit. Meie pühendunud meeskond lihtsustab seda protsessi teie jaoks. Loome aruanded ja aitame teil neid analüüsida.",
        service4_title: "Konsultatsioonid ja strateegiline nõustamine",
        service4_text: "Meie erineva taustaga asjatundjad aitavad teil hinnata oma finantsolukorda ning pakuvad väärtuslikke teadmisi ja nõuandeid teie äritegevuseks. Oleme siin, et teid aidata. Olgu tegemist eeskirjade järgimise, finantsstrateegiate optimeerimise või tegevustakistuste ületamisega, pakume teostatavaid lahendusi, mis vastavad just teie ettevõtte vajadustele.",
        service5_title: "Nutikas palgaarvestus ja personalijuhtimise lahendused",
        service5_text: "Angel Oy palgaarvestusteenuse eesmärk on tagada, että teie töötajatele makstakse tasu täpselt ja vastavalt kõigile seaduslikele nõuetele. Meie asjatundjate meeskond arvutab palgad ja preemiad professionaalselt, järgides Soome tööseadusi, kollektiivlepinguid ja ametiühingute eeskirju. See aitab teil säilitada positiivseid suhteid oma töötajatega.",
        service6_title: "Maksude planeerimine ja optimeerimine",
        service6_text: "Pakume asjatundlikke maksude planeerimise strateegiaid, et aidata ettevõtetel vähendada maksukohustusi, maksimeerida mahaarvamisi ja tagada täielik vastavus Soome maksuseadustele. Meie isikupärane lähenemine võimaldab tõhusat maksuprognoosimist ja planeerimist, tagades, et ettevõtted saavad teha teadlikke finantsotsuseid.",
        consult_title: "Konsulteerime ettevõtte juhte strateegias",
        consult_subtitle: "Teie kasv, meie kirg.",
        stat1_title: "Aastatepikkune kogemus",
        stat2_title: "Rahulolevad kliendid",
        stat3_title: "Uued kliendid iganädalaselt",
        stat4_title: "Uued asutatud ettevõtted",
        contact_button_2: "Võta ühendust",
        footer_slogan: "Teie finantsasjade kaitseinglid.",
        footer_copyright: "{year} © Angel Financial Services Oy. All rights reserved.",

         // Palvelut Page
        palvelut_hero_slogan1_1: "Sinu",
        palvelut_hero_slogan1_2: "teekond,",
        palvelut_hero_slogan2_1: "Meie",
        palvelut_hero_slogan2_2: "asjatundlikkus.",
        palvelut_s2_title: "Ettevõtte registreerimine",
        palvelut_s2_text: `<p>Ettevõtte asutamine võib olla üle jõu käiv. Kui teil on suurepärane äriidee, kuid te pole kindel õiges ettevõtlusvormis või peate registreerimist segaseks, ärge muretsege – te pole üksi. Protsess hõlmab sageli bürokraatlikke protseduure ja koordineerimist erinevate ametiasutustega, mis jätab teid mõtlema, kust ja kuidas oma ettevõtja teekonda alustada.</p><p>Angel Financial Services Oy-s mõistame neid väljakutseid ja oleme siin, et seda teekonda teie jaoks lihtsustada. Meie eksperdid juhendavad teid ettevõtte teavitamise ja registreerimise protsessis, vabastades teid halduskoormusest. Pakume väärtuslikku nõu, et aidata teil määrata oma tegevuseks sobivaim ettevõtlusvorm. Kaalute füüsilisest isikust ettevõtjat või osaühingut (Oy)? Olete mures juriidiliste nõuete ja vastavuse pärast? Pakume neile küsimustele vastuseid, tagades, et saate oma uue ettevõtte rajada kindlale alusele, mis on varustatud eduka alguse jaoks vajalike teadmiste ja toega.</p>`,
        palvelut_s3_title: "Igakuine raamatupidamine",
        palvelut_s3_text: `<p>Angel Financial Services Oy pakub laiaulatuslikku igakuist raamatupidamisteenust, mis tagab, et teie finantsasjad on professionaalsetes kätes. Meie meeskond registreerib kõik teie ostud ja müügid ning teostab selged käibemaksuarvestused. Kuid me ei piirdu sellega – me läheme kaugemale pelkadest numbritest. Koostame üksikasjalikud kasumiaruanded, et anda selge ülevaade teie finantsolukorrast. Lisaks laieneb meie teenus teie finantsolukorra hindamisele ja väärtuslike teadmiste ja nõuannete pakkumisele teie äritegevuseks.</p><p>Mõtlete, kuidas tulevikku planeerida? Me saame aidata. Meie teenuste hulka kuulub ka abi tulevaste tegevuste kaardistamisel. Analüüsime teie igakuiseid tulusid ja kulusid ning anname praktilisi soovitusi kasumlikkuse parandamiseks ja kulude minimeerimiseks.</p><p>Olete mures oma ettevõtte rahalise heaolu pärast? Meie igakuine raamatupidamisteenus on loodud selleks, et pakkuda teile teavet ja juhendamist, mida vajate teadlike otsuste tegemiseks. Las meie tegeleme teie ettevõtte numbritega.</p>`,
        palvelut_s4_title: "Majandusaasta aruanded ja kohandatud raamatupidamine",
        palvelut_s4_text: "<p>Ettevõtjana võite sageli leida end läbi töötamas ulatuslikke raamatupidamisandmeid eelmisest aastast, et hinnata oma kasumit või kahjumit. Meie pühendunud meeskond lihtsustab seda protsessi teie jaoks. Koostame hoolikalt lõplikud finantsaruanded, andes teile põhjaliku ülevaate teie finantstulemustest. Kuid see ei lõpe siin. Aitame teil ka neid aruandeid analüüsida. Kuidas saab teie ettevõte kasu meie üksikasjalikest finantsaruannetest? Milliseid teadmisi saate meie analüüsist? Lisaks tagame, et teie finantsaruanded vastavad kõigile seaduslikele nõuetele. Meie meeskond tegeleb paberimajandusega, valmistades ette ja esitades kõik vajalikud deklaratsioonid maksuametile. Angel Financial Services Oy abil saate vaevata navigeerida finantsaruannete ja aasta lõpetamise keerukuses. Laske meil olla teie teejuht finantsläbipaistvuse ja vastavuse tagamisel. Kuidas saavad meie teenused teie finantsaruandlust tõhustada? Kuidas saame aidata teil teha teadlikke otsuseid oma finantsandmete põhjal? Oleme siin, et pakkuda teile vajalikke vastuseid.</p>",
        palvelut_s5_title: "Konsultatsioonid ja strateegiline nõustamine",
        palvelut_s5_text: `<p>Angel Financial Services Oy konsultatsiooniteenused on loodud pakkuma teie ettevõttele asjatundlikku juhendamist ja praktilisi teadmisi. Meie meeskond koosneb erineva taustaga liikmetest, kellest igaüks toob endaga kaasa hulgaliselt teadmisi ja realistliku perspektiivi. See ainulaadne kogemuste kombinatsioon võimaldab meil pakkuda teile asjakohast juhendamist ja nõuandeid Soome äritegevuse erinevates aspektides.</p><p>Kas seisate silmitsi väljakutsetega oma äris? Mõtlete, kuidas navigeerida Soome ärikeskkonna keerukuses? Meie eksperdid on siin, et teid aidata. Olgu tegemist eeskirjade järgimise, finantsstrateegiate optimeerimise või tegevustakistuste ületamisega, pakume teostatavaid lahendusi, mis vastavad just teie ettevõtte vajadustele.</p>`,
        palvelut_s6_title: "Nutikas palgaarvestus ja personalijuhtimise lahendused",
        palvelut_s6_text: `<p>Angel Oy palgaarvestusteenuse eesmärk on tagada, et teie töötajatele makstakse tasu täpselt ja vastavalt kõigile seaduslikele nõuetele. Meie asjatundjate meeskond arvutab palgad professionaalselt, järgides Soome tööseadusi, kollektiivlepinguid ja ametiühingute määrusi. See ei aita teil mitte ainult täita oma juriidilisi kohustusi, vaid ka säilitada positiivseid suhteid oma töötajatega, vältides võimalikke juriidilisi konflikte.</p><p>Lisaks täpsele palgaarvestusele pakume tuge värbamisprotsessis. See hõlmab abi teie ettevõtte töölepingutega. Meie laiaulatusliku palgaarvestusteenusega makstakse teie töötajatele palka õigesti ja õigeaegselt. Angel Oy abil võite usaldada, et teie palgaarvestus on võimekates kätes, pakkudes nii rahalist täpsust kui ka meelerahu.</p>`,
        palvelut_s7_title: "Maksude planeerimine ja optimeerimine",
        palvelut_s7_text: `<p>Angel Oy käibemaksuarvestuste ja käibemaksuaruannete teenus on loodud tegelema ühe kõige kriitilisema valdkonnaga äri finantsjuhtimises. Mõistame, et käibemaksu arvutamine ja täpsete käibemaksuaruannete koostamine võib olla keeruline ja aeganõudev ülesanne. Siin astume meie mängu.</p><p>Meie pühendunud spetsialistide meeskond võtab käibemaksuarvestuste vaeva enda peale, jälgides kõiki teie oste ja müüke. Tagame, että teie käibemaksukohustused on täidetud vastavalt Soome maksueeskirjadele, nii et saate keskenduda oma põhitegevusele, muretsemata vastavuse pärast. Meie käibemaksuteenus on loodud teie finantsprotsesside sujuvamaks muutmiseks, vigade riski minimeerimiseks ja maksuametite nõuete täitmise tagamiseks. Angel Oy abil võite olla kindel, et teie käibemaksuarvestused ja -aruanded on täpsed ja ajakohased, pakkudes teile rahalist selgust ja kindlustunnet oma finantsjuhtimises.</p>`,
        contact_button_3: "Võta ühendust",

        // Meistä Page
        meista_s1_title: "Meist",
        meista_s1_text: `<p>Angel Financial Services Oy tegevuse keskmes on väikeste ja keskmise suurusega ettevõtete toetamine ja arendamine finantsjuhtimise ja maksuaruandluse valdkonnas. Edu määravad peamiselt numbrid ning meie sügav arusaam nendest ja raamatupidamisest võimaldab meil pakkuda praktilisi lahendusi ettevõtete omanikele, kes otsivad abi oma ettevõtte juhtimisel ning kasumlikkuse ja kasvu saavutamisel.</p><p>Meie põhiteenuste hulka kuulub meie raamatupidamis- ja äriteadmiste rakendamine järgmistes valdkondades: igapäevased raamatupidamisteenused, maksuameti aruannete koostamine, käibemaksu ja palkade arvutamine ning finantsaruannete esitamine ametiasutustele ja ettevõtjatele.</p>`,
        meista_s2_title: "Meie tegevusviis",
        meista_s2_subtitle: "Koostöös edu suunas",
        meista_s2_text: "Angel meeskond pakub täielikku tuge finantsjuhtimise ja maksustamise valdkonnas, et saaksite oma väärtusliku aja pühendada oma põhitegevuse arendamisele. Saate keskenduda oma ärieesmärkide saavutamisele, kui meie tegeleme finantsülesannetega.",
        meista_s3_title: "Vaevatu asjaajamine",
        meista_s3_subtitle: "Teenused just teile sobivalt",
        meista_s3_text: "Kõik meie teenused on saadaval ka digitaalselt, mis võimaldab lihtsat suhtlust ja asjade jälgimist mugavalt kodust, säästes teid lisavaevast. Vajadusel korraldame teiega ka isiklikke kohtumisi.",
        meista_s4_title: "Vajad abi? Võta ühendust!",
        meista_s4_text: "+358 40 129 1041 või saada e-kiri: info@angeloy.fi",
        meista_s4_button: "BRONEERI AEG",
        meista_s5_title: "Keskendu edule – meie tegeleme numbritega.",
        meista_s5_subtitle: "Võta ühendust ja aitame sind juba täna!",
        meista_s5_name_placeholder: "Sinu nimi",
        meista_s5_email_placeholder: "Sinu e-posti aadress",
        meista_s5_button: "Saada",
        meista_s5_text_right: "Oleme teie usaldusväärne finantspartner. Aitame teie ettevõttel saavutada kasumlikkust, kasvu ja pikaajalist edu.",

        // Tiimi Page
        tiimi_s1_title: "Mitmekultuuriline ja rikkalik mosaiik",
        tiimi_s1_subtitle: "Angel meeskonna tugevus peitub tema inimestes: kogenud raamatupidajates, ettevõtjates ja strateegilistes nõustajates. Meid ühendab üks eesmärk: toetada teie ettevõtte edu.",
        tiimi_s1_button1: "Teenused",
        tiimi_s1_button2: "Võta Ühendust",
        tiimi_s2_title: "Team Angel",
        member1_name: "Laivi Ijeh",
        member1_title: "Tegevjuht, \nRaamatupidaja",
        member1_desc: "",
        member2_name: "Talal Mohammed",
        member2_title: "Vanem maksunõustaja \nja \nvastavusspetsialist",
        member2_desc: "",
        member3_name: "Hanna Räsänen",
        member3_title: "Vanem \nFinantsnõustaja",
        member3_desc: "",
        member4_name: "Teele Kullerkann",
        member4_title: "Raamatupidaja \nja \nnõuandja",
        member4_desc: "",
        member5_name: "Leena Bansal",
        member5_title: "Raamatupidaja \nja \nnõuandja",
        member5_desc: "",

        // Yhteystiedot Page
        contact_s1_title: "Kontaktandmed",
        contact_s1_phone_title: "Telefoninumber",
        contact_s1_phone_number: "+358 40 129 1041",
        contact_s1_address_title: "Aadress",
        contact_s1_address_text: "Ruosilantie 1 A 00390, Helsinki Finland",
        contact_s1_hours_title: "Lahtiolekuajad",
        contact_s1_hours_mon_thu: "Esmaspäev - Neljapäev 10-16",
        contact_s1_hours_fri: "Reede võrgus 10-16",
        contact_s1_hours_sat_sun: "Laupäev - Pühapäev SULETUD",
        contact_s1_form_name_placeholder: "Sinu nimi",
        contact_s1_form_email_placeholder: "Sinu e-posti aadress",
        contact_s1_form_message_placeholder: "Sinu sõnum",
        contact_s1_form_button: "Saada",

    }
    },
    
    set(lang) {
        const dict = this.data[lang];
        if (!dict) {
            console.error(`Language ${lang} not found`);
            return;
        }

        this.currentLang = lang;

        document.querySelectorAll('[data-translate]').forEach(el => {
            const text = dict[el.getAttribute('data-translate')];
            if (!text) return;
            // Translation strings are static content from this file, so
            // HTML strings can be inserted as-is.
            if (text.startsWith('<p>')) {
                el.innerHTML = text;
            } else {
                el.textContent = text.replace('{year}', new Date().getFullYear());
            }
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const text = dict[el.getAttribute('data-translate-placeholder')];
            if (text) el.placeholder = text;
        });

        document.querySelectorAll('[data-translate-aria-label]').forEach(el => {
            const text = dict[el.getAttribute('data-translate-aria-label')];
            if (text) el.setAttribute('aria-label', text);
        });

        // Update active language button style
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });

        document.documentElement.lang = lang;

        // Store preference
        try {
            localStorage.setItem('preferred_language', lang);
        } catch (e) {
            console.warn('localStorage not available');
        }

        document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
    },

    // Look up a single string in the current language (falls back to Finnish).
    t(key) {
        return this.data[this.currentLang][key] || this.data.fi[key] || '';
    },

    init() {
        // Language buttons exist in the header and in the mobile menu copy.
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn[data-lang]');
            if (btn) this.set(btn.dataset.lang);
        });

        let lang = 'fi';
        try {
            const savedLang = localStorage.getItem('preferred_language');
            if (savedLang && this.data[savedLang]) lang = savedLang;
        } catch (e) {
            console.warn('localStorage not available');
        }
        this.set(lang);
    }
};

// === NAVIGATION MODULE ===
// Each "page" is a <main class="page" data-page-id="..."> element; the URL hash
// says which one is shown (#palvelut). A hash can also point at an element
// inside a page (#ukk), which opens that page and scrolls to the element.
const Navigation = {
    pages: [],
    pageIds: [],
    navLinks: [],
    currentPage: null,

    init() {
        this.pages = [...document.querySelectorAll('.page')];
        this.pageIds = this.pages.map(page => page.dataset.pageId);
        this.navLinks = [...document.querySelectorAll('.nav-link, .mobile-nav-link')];

        document.addEventListener('click', (e) => this.onClick(e));
        // Back/forward buttons: show the page from the URL without adding history.
        window.addEventListener('popstate', () => this.showFromUrl());
        this.showFromUrl();
    },

    onClick(e) {
        // Let the browser handle new-tab clicks (ctrl/cmd/shift/middle click).
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        if (link.hasAttribute('data-skip-link')) {
            e.preventDefault();
            this.focusElement(this.pages.find(page => !page.hidden));
            return;
        }

        const route = this.resolve(link.getAttribute('href').substring(1));
        if (!route) return;

        e.preventDefault();
        this.go(route.pageId, route.target);
    },

    // Returns { pageId, target } for a hash, or null if the hash is neither a
    // page nor an element inside a page.
    resolve(hash) {
        if (!hash) return { pageId: 'koti', target: null };
        if (this.pageIds.includes(hash)) return { pageId: hash, target: null };

        const target = document.getElementById(hash) || document.getElementById(hash.toLowerCase());
        const page = target && target.closest('.page');
        return page ? { pageId: page.dataset.pageId, target } : null;
    },

    showFromUrl() {
        const route = this.resolve(window.location.hash.substring(1));
        if (route) {
            this.render(route.pageId, route.target);
        } else if (!this.currentPage) {
            this.render('koti', null);
        }
    },

    // Navigation started by the visitor: add a history entry and move focus
    // to the new content so screen readers announce it.
    go(pageId, target = null) {
        const hash = `#${target ? target.id : pageId}`;
        if (window.location.hash !== hash) {
            history.pushState(null, '', hash);
        }
        this.render(pageId, target);

        const page = this.pages.find(p => p.dataset.pageId === pageId);
        this.focusElement(target || page.querySelector('h1') || page);
    },

    render(pageId, target) {
        this.pages.forEach(page => {
            page.hidden = page.dataset.pageId !== pageId;
        });

        this.navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${pageId}`;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });

        if (target) {
            target.scrollIntoView();
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        this.currentPage = pageId;
        document.dispatchEvent(new CustomEvent('pagechange', { detail: { pageId } }));
    },

    focusElement(el) {
        if (!el) return;
        if (!el.matches('a, button, input, select, textarea, [tabindex]')) {
            el.setAttribute('tabindex', '-1');
        }
        el.focus({ preventScroll: true });
    }
};

// === MOBILE MENU MODULE ===
// The menu is a native <dialog>: showModal() keeps keyboard focus inside it,
// Escape closes it and focus returns to the menu button afterwards.
const MobileMenu = {
    menuButton: null,
    closeButton: null,
    menu: null,

    init() {
        this.menuButton = document.getElementById('mobile-menu-button');
        this.closeButton = document.getElementById('mobile-menu-close-button');
        this.menu = document.getElementById('mobile-menu');

        this.setupLanguageSwitcher();

        this.menuButton.addEventListener('click', () => this.open());
        this.closeButton.addEventListener('click', () => this.menu.close());
        this.menu.addEventListener('close', () => this.onClose());

        // Choosing a page from the menu closes it.
        document.addEventListener('pagechange', () => {
            if (this.menu.open) this.menu.close();
        });
    },

    setupLanguageSwitcher() {
        const languageSelector = document.getElementById('lang-switcher');
        const mobileLangSwitcher = document.getElementById('mobile-lang-switcher');

        if (languageSelector && mobileLangSwitcher) {
            mobileLangSwitcher.innerHTML = languageSelector.innerHTML;
        }
    },

    open() {
        this.menu.showModal();
        document.body.style.overflow = 'hidden';
        this.menuButton.setAttribute('aria-expanded', 'true');
    },

    onClose() {
        document.body.style.overflow = '';
        this.menuButton.setAttribute('aria-expanded', 'false');
    }
};

// === PARALLAX MODULE ===
const Parallax = {
    heroSection: null,
    backgrounds: [],
    ticking: false,

    init() {
        this.heroSection = document.querySelector('.hero-slider')?.parentElement;
        this.backgrounds = [...document.querySelectorAll('.swiper-parallax-bg')];
        if (this.heroSection) {
            window.addEventListener('scroll', () => this.onScroll(), { passive: true });
        }
    },

    onScroll() {
        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.updateParallax();
                this.ticking = false;
            });
            this.ticking = true;
        }
    },

    updateParallax() {
        const scrollTop = window.scrollY;

        if (scrollTop < this.heroSection.offsetHeight) {
            this.backgrounds.forEach(bg => {
                bg.style.transform = `translateY(${scrollTop * 0.3}px)`;
            });
        }
    }
};

// === SLIDER MODULE ===
const Slider = {
    swiper: null,
    toggleButton: null,

    init() {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        this.swiper = new Swiper('.hero-slider', {
            loop: SWIPER_CONFIG.LOOP,
            effect: SWIPER_CONFIG.EFFECT,
            speed: SWIPER_CONFIG.SPEED,
            // Visitors who ask for reduced motion get a still slider they can
            // move with the arrows.
            autoplay: reduceMotion ? false : {
                delay: SWIPER_CONFIG.AUTOPLAY_DELAY,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            parallax: true,
            a11y: {
                prevSlideMessage: Translation.t('slider_prev'),
                nextSlideMessage: Translation.t('slider_next'),
            }
        });

        this.setupAutoplayToggle();
        this.loadDeferredBackgrounds();
    },

    // A visible pause/play button, so the slideshow can be stopped (WCAG 2.2.2).
    setupAutoplayToggle() {
        this.toggleButton = document.getElementById('hero-autoplay-toggle');
        if (!this.toggleButton) return;

        this.toggleButton.addEventListener('click', () => {
            if (this.swiper.autoplay.running) {
                this.swiper.autoplay.stop();
            } else {
                this.swiper.autoplay.start();
            }
        });
        this.swiper.on('autoplayStart', () => this.updateAutoplayToggle());
        this.swiper.on('autoplayStop', () => this.updateAutoplayToggle());
        document.addEventListener('languagechange', () => this.updateAutoplayToggle());
        this.updateAutoplayToggle();
    },

    updateAutoplayToggle() {
        const running = this.swiper.autoplay.running;
        const key = running ? 'slider_pause' : 'slider_play';
        this.toggleButton.setAttribute('data-translate-aria-label', key);
        this.toggleButton.setAttribute('aria-label', Translation.t(key));
        this.toggleButton.querySelector('.icon-pause').classList.toggle('hidden', !running);
        this.toggleButton.querySelector('.icon-play').classList.toggle('hidden', running);
    },

    // Slides after the first one get their background image only once the page
    // has loaded, so they do not compete with the first slide for bandwidth.
    loadDeferredBackgrounds() {
        const load = () => document.querySelectorAll('[data-bg]').forEach(el => {
            el.style.backgroundImage = `url('${el.dataset.bg}')`;
            el.removeAttribute('data-bg');
        });
        if (document.readyState === 'complete') {
            load();
        } else {
            window.addEventListener('load', load, { once: true });
        }
    }
};

// === SCROLL ANIMATIONS MODULE ===
const ScrollAnimations = {
    observer: null,

    init() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-slide-left, .reveal-slide-right');

        if (!('IntersectionObserver' in window)) {
            revealElements.forEach(el => el.classList.add('visible'));
            return;
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            this.observer.observe(el);
        });
    }
};

// === TEAM MODAL MODULE ===
// The profile popup is a native <dialog>: showModal() keeps focus inside it,
// Escape closes it, and focus goes back to the card that opened it.
const TeamModal = {
    modal: null,
    modalImg: null,
    modalName: null,
    modalTitle: null,
    modalDesc: null,
    closeBtn: null,
    openMemberId: null,
    trigger: null,

    members: [
        {
            id: 'member1',
            name: 'member1_name',
            title: 'member1_title',
            desc: 'member1_desc',
            imgSrc: 'img/team1.webp',
        },
        {
            id: 'member2',
            name: 'member2_name',
            title: 'member2_title',
            desc: 'member2_desc',
            imgSrc: 'img/team2.webp',
        },
        {
            id: 'member3',
            name: 'member3_name',
            title: 'member3_title',
            desc: 'member3_desc',
            imgSrc: 'img/team3.webp',
        },
        {
            id: 'member4',
            name: 'member4_name',
            title: 'member4_title',
            desc: 'member4_desc',
            imgSrc: 'img/team4.webp',
        },
        {
            id: 'member5',
            name: 'member5_name',
            title: 'member5_title',
            desc: 'member5_desc',
            imgSrc: 'img/team5.webp',
        },
    ],

    init() {
        this.modal = document.getElementById('team-modal');
        this.modalImg = document.getElementById('modal-img');
        this.modalName = document.getElementById('modal-name');
        this.modalTitle = document.getElementById('modal-title');
        this.modalDesc = document.getElementById('modal-desc');
        this.closeBtn = document.getElementById('modal-close-button');

        this.populateTeamGrid();
        this.setupEventListeners();
    },

    populateTeamGrid() {
        const teamGrid = document.getElementById('team-grid');
        if (!teamGrid) return;

        let teamHTML = '';
        this.members.forEach((member, index) => {
            // This determines if the item is in the top row or bottom row
            const isTopRow = index < 2;

            // Apply col-span for the top row, and flex-1 for the bottom row
            const layoutClass = isTopRow ? 'lg:col-span-2' : 'flex-1';

            // Open the wrapper div right before the first bottom-row item
            if (index === 2) {
                teamHTML += "<div class='lg:col-span-4 grid lg:flex gap-y-8'>";
            }

            // The name is a button inside the heading; clicking anywhere on the
            // card opens the same profile.
            teamHTML += `
                <div class="${layoutClass} team-member-card text-center cursor-pointer group" data-member-id="${member.id}">
                    <img src="${member.imgSrc}"
                         alt=""
                         width="128" height="128"
                         class="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                         loading="lazy" decoding="async">
                    <h3 class="mt-4 text-xl font-bold">
                        <button type="button" class="team-member-button" aria-haspopup="dialog" data-translate="${member.name}">${Translation.t(member.name)}</button>
                    </h3>
                    <p class="text-gray-500 whitespace-pre-line" data-translate="${member.title}">${Translation.t(member.title)}</p>
                </div>
            `;
        });

        // Close the wrapper div after the loop if it was opened
        if (this.members.length > 2) {
            teamHTML += "</div>";
        }
        teamGrid.innerHTML = teamHTML;
    },

    setupEventListeners() {
        // Clicks (and Enter/Space on the name button) anywhere on a card
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.team-member-card');
            if (card) {
                this.open(card.dataset.memberId, card.querySelector('.team-member-button'));
            }
        });

        this.closeBtn.addEventListener('click', () => this.modal.close());

        // Close on backdrop click (the dialog itself is only hit outside the content)
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.modal.close();
            }
        });

        this.modal.addEventListener('close', () => {
            document.body.style.overflow = '';
            this.trigger?.focus();
        });

        document.addEventListener('languagechange', () => {
            if (this.modal.open) this.fill(this.openMemberId);
        });
    },

    open(memberId, trigger) {
        if (!this.members.some(m => m.id === memberId)) return;

        this.openMemberId = memberId;
        this.trigger = trigger;
        this.fill(memberId);

        this.modal.showModal();
        document.body.style.overflow = 'hidden';
    },

    fill(memberId) {
        const memberData = this.members.find(m => m.id === memberId);
        const desc = Translation.t(memberData.desc);

        this.modalImg.src = memberData.imgSrc;
        this.modalName.textContent = Translation.t(memberData.name);
        this.modalTitle.textContent = Translation.t(memberData.title);
        this.modalDesc.innerHTML = desc;
        this.modalDesc.hidden = !desc;
    }
};

// === CONTACT FORM MODULE ===
// Sends the form with fetch so the visitor stays on the page. The server
// (send-email-db.php) answers with JSON: { success: true|false, message }.
const FormHandler = {
    init() {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        });
    },

    async handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        if (form.dataset.submitting === 'true') return;

        const submitBtn = form.querySelector('button[type="submit"]');
        const formData = new FormData(form);
        formData.set('lang', Translation.currentLang);

        form.dataset.submitting = 'true';
        submitBtn.disabled = true;
        submitBtn.textContent = Translation.t('form_sending');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            let result = {};
            try {
                result = await response.json();
            } catch (parseError) {
                console.error('Contact form: the server did not return JSON', parseError);
            }

            if (response.ok && result.success) {
                this.showMessage(form, Translation.t('form_success'), 'success');
                form.reset();
            } else {
                this.showMessage(form, result.message || Translation.t('form_error'), 'error');
            }
        } catch (error) {
            console.error('Contact form: sending failed', error);
            this.showMessage(form, Translation.t('form_error'), 'error');
        } finally {
            form.dataset.submitting = 'false';
            submitBtn.disabled = false;
            submitBtn.textContent = Translation.t(submitBtn.dataset.translate);
        }
    },

    showMessage(form, message, type) {
        // Remove existing messages
        const existingMsg = form.parentElement.querySelector('.form-message');
        if (existingMsg) existingMsg.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.setAttribute('role', type === 'error' ? 'alert' : 'status');

        // Insert after the form
        form.insertAdjacentElement('afterend', messageDiv);

        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-remove success messages after 10 seconds
        if (type === 'success') {
            setTimeout(() => messageDiv.remove(), 10000);
        }
    }
};

// === IMAGE ERROR HANDLING ===
// Error events do not bubble, so listen in the capture phase; this also
// covers images added later (team cards, the profile popup).
const ImageHandler = {
    placeholder: 'img/placeholder.jpg',

    init() {
        document.addEventListener('error', (e) => {
            const img = e.target;
            if (img.tagName !== 'IMG' || img.src.endsWith(this.placeholder)) return;
            console.warn(`Failed to load image: ${img.src}`);
            img.src = this.placeholder;
        }, true);
    }
};

// === INITIALIZATION ===
// Each module starts on its own, so one failing module (for example the
// slider) does not leave the rest of the page without its features.
document.addEventListener('DOMContentLoaded', function() {
    const modules = { ImageHandler, Translation, Navigation, MobileMenu, Parallax, Slider, ScrollAnimations, TeamModal, FormHandler };

    Object.entries(modules).forEach(([name, module]) => {
        try {
            module.init();
        } catch (error) {
            console.error(`${name} failed to initialize:`, error);
        }
    });
});
