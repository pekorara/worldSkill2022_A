<?php

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

$jsonData = file_get_contents('php://input');

$storageDir = __DIR__ . '/requests';
if (!is_dir($storageDir)) {
    mkdir($storageDir, 0755, true);
}

$filename = date('H-i-s') . 'request.txt';
$filePath = $storageDir . '/' . $filename;

file_put_contents($filePath, $jsonData);

http_response_code(200);
echo json_encode(['message' => 'Data stored successfully.', 'file' => $filename]);