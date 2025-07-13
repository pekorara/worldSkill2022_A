<?php
$output = 'images-modified';
if(!is_dir($output)){
    mkdir($output,0777,true);
}
$files = glob('images/*');
foreach($files as $file){
    $image = imagecreatefromjpeg($file);
    imagefilter($image,IMG_FILTER_GRAYSCALE);
    $x = imagesx($image);
    $y = imagesy($image);
    $newX = 320;
    $newY = $y / $x * $newX;
    $result = imagecreatetruecolor($newX, $newY);
    imagecopyresampled($result,$image,0,0,0,0,$newX, $newY, $x, $y);
    imagejpeg($result,'images-modified/' . basename($file));
    imagedestroy($image);
    imagedestroy($result);
}
