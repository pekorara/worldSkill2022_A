<?php

/**
 * define the number of ../ to get to the root folder
 */
define('ROOT_LEVEL', '../');

/**
 * require the general functions file
 */
require(ROOT_LEVEL . 'include/functions.php');

/*
 * look up the user
 */

$attempts = 0;
$lines = file('login.log');
$now = time();

foreach ($lines as $line) {
    [$log_username, $timestamp] = explode(',', $line);
    if ($log_username === $_POST['username'] && ($now - (int)$timestamp) <= 30) {
        $attempts++;
    }
}

if ($attempts >= 5) {
    echo "<script>alert('嘗試太頻繁，請稍後再試'); window.location.href='".ROOT_LEVEL."login.php';</script>";
    exit;
}

$user = dbConnect('select * from users where username =?',[$_POST['username']]);
if (!$user || !password_verify($_POST['password'], $user[0]['password'])) {
    file_put_contents('login.log', $_POST['username'] . ',' . $now . "\n", FILE_APPEND);
    echo "<script>alert('登入失敗'); window.location.href='".ROOT_LEVEL."login.php';</script>";
    exit;
} else {
    $token = bin2hex(random_bytes(32));
    dbConnect('UPDATE users SET token = ? WHERE id = ?', [$token, $user[0]['id']]);
    setcookie('logged_in', $token, 0, '/');
    header('Location:' . ROOT_LEVEL . 'index.php');
    exit;
}

