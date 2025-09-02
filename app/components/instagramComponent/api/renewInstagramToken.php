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

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
$response = curl_exec($ch);
$curlErr = curl_error($ch);
curl_close($ch);

$data = json_decode($response, true);

$logDir = __DIR__ . '/logs';
if (!is_dir($logDir)) {mkdir($logDir, 0755, true);}
$logFile = $logDir . '/token_renew.log';
$logMessage = '[' . date('Y-m-d H:i:s') . '] ';

if (isset($data['access_token'])) {
    $config['INSTAGRAM_ACCESS_TOKEN'] = $data['access_token'];
    $novoEnv = "<?php\nreturn " . var_export($config, true) . ";\n";
    file_put_contents($envPath, $novoEnv);
    $logMessage .= "✅ Token renovado com sucesso.\n";}

    else {$logMessage .= "❌ Falha ao renovar token: " . ($curlErr ?: json_encode($data)) . "\n";
}

file_put_contents($logFile, $logMessage, FILE_APPEND);
echo $logMessage;