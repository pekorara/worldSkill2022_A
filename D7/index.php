<?php
$date1 = $_GET['date1'] ?? null;
$date2 = $_GET['date2'] ?? null;

$output = '';

$d1 = new DateTime($date1);
$d2 = new DateTime($date2);

$diff = $d1->diff($d2);
$days = $diff->days;

$numWords = [
    0 => 'zero',
    1 => 'one',
    2 => 'two',
    3 => 'three',
    4 => 'four',
    5 => 'five',
    6 => 'six',
    7 => 'seven',
    8 => 'eight',
    9 => 'nine',
    10 => 'ten'
];

$word = $numWords[$days] ?? $days;

$output = $word . ' days';
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Number of Days</title>
</head>

<body>
	<h4>Calculate number of days</h4>

    <form action="" method="get">
        <label for="date1">Date 1:
            <input type="date" id="date1" name="date1" value="<?= $date1 ?>">
        </label>

        <label for="date2">Date 2:
            <input type="date" id="date2" name="date2" value="<?= $date2 ?>">
        </label>

        <input type="submit" />
    </form>

    <p>Output: <?= $output ?></p>

</body>
</html>