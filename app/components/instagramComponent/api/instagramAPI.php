<?php
header('Content-Type: application/json');

$config = require __DIR__ . '/.env.php'; 
$instagramToken = $config['INSTAGRAM_ACCESS_TOKEN'] ?? null;
$instagramBusinessAccountId = $config['INSTAGRAM_BUSINESS_ACCOUNT_ID'] ?? null;

if (!$instagramToken || !$instagramBusinessAccountId) {
    http_response_code(500);
    echo json_encode(['error' => 'Token ou ID da conta não configurado.']);
    exit;
}

$url = "https://graph.facebook.com/v21.0/{$instagramBusinessAccountId}/media"
    . "?fields=id,media_type,media_url,thumbnail_url,permalink"
    . "&access_token={$instagramToken}";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
$response = curl_exec($ch);
$curlErr = curl_error($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === FALSE || $httpCode >= 400) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao acessar a API do Instagram: ' . $curlErr]);
    exit;
}

$data = json_decode($response, true);

if (!is_array($data)) {
    http_response_code(500);
    echo json_encode(['error' => 'Resposta inválida da API do Instagram.', 'raw' => $response]);
    exit;
}

if (isset($data['error'])) {
    http_response_code(500);
    echo json_encode(['error' => $data['error']['message']]);
    exit;
}

echo json_encode($data['data']);