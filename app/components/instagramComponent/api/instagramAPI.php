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

$response = @file_get_contents($url); 

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao acessar a API do Instagram.']);
    exit;
}

$data = json_decode($response, true);

if (isset($data['error'])) {
    http_response_code(500);
    echo json_encode(['error' => $data['error']['message']]);
    exit;
}

echo json_encode($data['data']);
