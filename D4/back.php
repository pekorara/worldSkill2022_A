<?php
$file = file_get_contents($_GET['file']);
$file = json_decode($file,true);
$file = array_slice($file,($_GET['page'] * 5) % count($file),5);
echo json_encode($file);