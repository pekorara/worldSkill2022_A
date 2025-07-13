<?php
$green = $_GET['green'] ?? '';
$red = $_GET['red'] ?? '';
$blue = $_GET['blue'] ?? '';

if ($green !== '' && $red !== '' && $blue !== '') {
    $g = dechex($green);
    $r = dechex($red);
    $b = dechex($blue);

    $output = "$r$g$b";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>RGB to HEX</title>
</head>

<body>
	<h4>RGB to HEX</h4>

	<form action="#">
		<label for="red">Red:
			<input type="text" id="red" name="red" value="<?= $red ?>">
		</label>

		<label for="green">Green:
			<input type="text" id="green" name="green" value="<?= $green ?>">
		</label>

		<label for="blue">Blue:
			<input type="text" id="blue" name="blue" value="<?= $blue ?>">
		</label>

		<input type="submit" />
	</form>

	<p>Hexadecimal: #<?= $output ?? '' ?></p>
</body>

</html>