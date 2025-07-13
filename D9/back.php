<?php
// 讀取 JSON 格式資料
$json = file_get_contents('php://input');
$data = json_decode($json, true); // true 表示轉成陣列

$result = [];

foreach ($data as $line) {
    $line = trim($line); // 清除換行與空白
    if (filter_var($line, FILTER_VALIDATE_INT) !== false) {
        $num = (int)$line;
        if ($num % 2 === 0) {
            $result[] = $num / 2;
        }
    }
}

sort($result);

echo "\n\n" . implode("\n", $result);