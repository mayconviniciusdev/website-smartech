<?php
$envPath = __DIR__ . '/.env.php'; // Caminho para o arquivo de configuração
$config = require $envPath; // Carrega o arquivo .env.php

// Dados do app (você pode mover para o .env.php também)
$appId = $config['APP_ID'];
$appSecret = $config['APP_SECRET'];
$currentToken = $config['INSTAGRAM_ACCESS_TOKEN'];

// Monta URL de renovação
$url = "https://graph.facebook.com/v21.0/oauth/access_token"
     . "?grant_type=fb_exchange_token"
     . "&client_id={$appId}"
     . "&client_secret={$appSecret}"
     . "&fb_exchange_token={$currentToken}";

// Faz requisição
$response = @file_get_contents($url);
$data = json_decode($response, true);

if (isset($data['access_token'])) {
    echo "✅ Novo token obtido.\n";

    // Atualiza o array de config
    $config['INSTAGRAM_ACCESS_TOKEN'] = $data['access_token'];

    // Regera conteúdo PHP
    $novoEnv = "<?php\nreturn " . var_export($config, true) . ";\n";

    // Salva no .env.php
    file_put_contents($envPath, $novoEnv);

    echo "✅ Novo token salvo com sucesso.\n";
} else {
    echo "❌ Erro ao renovar token:\n";
    print_r($data);
}
