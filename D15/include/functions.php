<?php

/**
 * This function checks to see if a user is logged in and will
 * redirect to the login page if required.
 */
function checkLogin(){
    if (!$_COOKIE['logged_in']){
        header('Location:' . ROOT_LEVEL . 'login.php');
        exit;
    }
}

/**
 * This method attempts to connect to the database and returns a PDO
 * connection object.
 *
 * @return array
 */
function dbConnect($query,$data = []){
    try{
        $pdo = new PDO('mysql:host=localhost;dbname=tables;charset=utf8', 'root', '');
        $p = $pdo->prepare($query);
        $p->execute($data);
        return $p->fetchAll(PDO::FETCH_ASSOC);
    } catch (Exception $e){
        die($e->getMessage());
    }
}

/**
 * This function returns an array of information about the user who
 * is logged in.
 *
 * @return mixed
 */
function userInfo(){
    $user = dbConnect('select username from users where token = ?',[$_COOKIE['logged_in']])[0];
    return $user;
}