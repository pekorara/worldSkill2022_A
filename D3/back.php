<?php
session_start();

if (isset($_POST['action']) && $_POST['action'] === 'updateData') {
  $data = json_decode($_POST['data'], true);
  $_SESSION['gameData'] = $data;
  echo json_encode($data);
  exit;
}

//這個很玄
//if (isset($_POST['action']) && $_POST['action'] === 'updateData') {
//  print_r( $_POST['data']);
//  $_SESSION['gameData'] = $_POST['data'];
//  echo json_encode($_POST['data']);
//  exit;
//}

if (!isset($_SESSION['gameData'])) {
  $_SESSION['gameData'] = [
    'board' => array_fill(0, 9, null),
    'turn' => 'X',
    'winner' => null
  ];
}

echo json_encode($_SESSION['gameData']);
