<?php
$num = intval($_GET['num']);
$str = '';
while ($num > 0){
    if($num >= 1000){
        $num-=1000;
        $str .= 'M';
    }
    if($num >= 900){
        $num-=900;
        $str .= 'CM';
    }
    if($num >= 500){
        $num-=500;
        $str .= 'D';
    }
    if($num >= 400){
        $num-=400;
        $str .= 'CD';
    }
    if($num >= 100){
        $num-=100;
        $str .= 'C';
    }
    if($num >= 90){
        $num-=90;
        $str .= 'XC';
    }
    if($num >= 50){
        $num-=50;
        $str .= 'L';
    }
    if($num >= 40){
        $num-=40;
        $str .= 'XL';
    }
    if($num >= 10){
        $num-=10;
        $str .= 'X';
    }
    if($num >= 5){
        $num-=5;
        $str .= 'V';
    }
    if($num >= 1){
        $num-=1;
        $str .= 'I';
    }
}

echo $str;