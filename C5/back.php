<?php
ini_set('display_errors', 0);
error_reporting(0);
try {
    $data = $_GET['data'] ?? '';

    $data = preg_replace('/\s+/','',$data);
    if (preg_match('/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i', $data, $matches)){
        $r = dechex($matches[1]);
        $g = dechex($matches[2]);
        $b = dechex($matches[3]);

        $result = [
            'message' => 'success',
            'type' => 'RGB',
            'HEX' => '#' . $r . $g . $b,
            'RGB' => $data
        ];

        echo json_encode($result);
        exit;
    }

    if(preg_match('/^#[0-9A-Fa-f]{6}$/',$data)){
        $r = hexdec($data[1] . $data[2]);
        $g = hexdec($data[3] . $data[4]);
        $b = hexdec($data[5] . $data[6]);

        $result = [
            'message' => 'success',
            'type' => 'HEX',
            'HEX' => $data,
            'RGB' => "rgb($r,$g,$b)"
        ];

        echo json_encode($result);
        exit;
    }
    echo json_encode(['message' => 'error']);
}catch (Exception $e){
    echo json_encode(['message' => 'error']);
}