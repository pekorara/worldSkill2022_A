<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convert code 64 to image</title>
</head>
<body>


    <form action="" method="POST">
        <textarea name="code" placeholder="CODE64"></textarea>
        <input type="submit" value="Convert">
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['code'])) {
        $base64 = $_POST['code'];
        file_put_contents('img/img' . time() . '.png', base64_decode($base64));
        echo "<p>Successful Convention</p>";
    }
    ?>

</body>
</html>