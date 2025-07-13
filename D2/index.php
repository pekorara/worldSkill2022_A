<?php
$arr = range(1, 40);
$factor = isset($_GET['factor']) ? $_GET['factor'] : null;

function check($value)
{
    global $factor;
    return $factor && $value % $factor === 0 ? "${value} is a multiple of $factor**" : $value;
}

$result = array_map('check', $arr);
echo '<pre>';
print_r($result);
echo '</pre>';