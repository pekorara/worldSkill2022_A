<?php
$path = $_GET['path'] ?? '';
$full = __DIR__ . '/media/' . $path;
$mine = mime_content_type($full);

switch ($mine) {
    case "image/jpeg":
        $image = imagecreatefromjpeg($full);
        break;
    case 'image/png':
        $image = imagecreatefrompng($full);
        break;
}

$color = imagecolorallocate($image,255,255,255);
imagestring($image, 5, imagesx($image) - 130, imagesy($image) - 30, 'WorldSkills', $color);
header('content-type:' . $mine);
if ($mine === 'image/jpeg') {
    imagejpeg($image);
}elseif ($mine === 'image/png') {
    imagepng($image);
}
imagedestroy($image);