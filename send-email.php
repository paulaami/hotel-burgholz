<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['salutation', 'firstName', 'lastName', 'email'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode([
            'success' => false, 
            'message' => 'Bitte füllen Sie alle Pflichtfelder aus.'
        ]);
        exit;
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Ungültige E-Mail-Adresse.'
    ]);
    exit;
}

// Sanitize inputs
$salutation = htmlspecialchars($data['salutation']);
$firstName = htmlspecialchars($data['firstName']);
$lastName = htmlspecialchars($data['lastName']);
$email = htmlspecialchars($data['email']);
$phone = htmlspecialchars($data['phone'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

// Email configuration - ZMIEŃ NA SWOJE DANE!
$to = 'kontakt@hotel-burgholz.de'; // ← Email odbiorcy
$subject = 'Neue Kontaktanfrage von ' . $firstName . ' ' . $lastName;

// Email body
$email_body = "
Neue Kontaktanfrage von der Hotel Burgholz Website

Anrede: $salutation
Vorname: $firstName
Nachname: $lastName
E-Mail: $email
Telefon: $phone

Nachricht:
$message

---
Gesendet am: " . date('d.m.Y H:i:s') . "
";

// Email headers
$headers = array(
    'From' => 'noreply@hotel-burgholz.de',
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

// Send email
$success = mail($to, $subject, $email_body, $headers);

if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.'
    ]);
}
?>