<?php
$envPath = __DIR__ . '/.env.php';
$config = require $envPath;

$appId = $config['APP_ID'];
$appSecret = $config['APP_SECRET'];
$currentToken = $config['INSTAGRAM_ACCESS_TOKEN'];

$url = "https://graph.facebook.com/v21.0/oauth/access_token"
     . "?grant_type=fb_exchange_token"
     . "&client_id={$appId}"
     . "&client_secret={$appSecret}"
     . "&fb_exchange_token={$currentToken}";

$response = @file_get_contents($url);
$data = json_decode($response, true);

if (isset($data['access_token'])) {
    echo "✅ Novo token obtido.\n";

    $config['INSTAGRAM_ACCESS_TOKEN'] = $data['access_token'];
    $novoEnv = "<?php\nreturn " . var_export($config, true) . ";\n";
    file_put_contents($envPath, $novoEnv);

    echo "✅ Novo token salvo com sucesso.\n";
} else {
    echo "❌ Erro ao renovar token:\n";
    print_r($data);
}