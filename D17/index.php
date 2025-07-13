<?php
$logFile = 'log.json';

// 確保 log.json 檔案存在
if (!file_exists($logFile)) {
    file_put_contents($logFile, json_encode([]));
}

// 儲存新貼文
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $content = trim($_POST['content'] ?? '');

    if ($name !== '' && $content !== '') {
        $posts = json_decode(file_get_contents($logFile), true);

        $posts[] = [
            'name' => htmlspecialchars($name),
            'content' => nl2br(htmlspecialchars($content)),
            'date' => date('Y-m-d H:i:s'),
        ];

        file_put_contents($logFile, json_encode($posts, JSON_PRETTY_PRINT));
        header("Location: " . $_SERVER['PHP_SELF']); // 防止重新整理重複送出
        exit;
    }
}

// 載入所有留言
$posts = json_decode(file_get_contents($logFile), true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Noticeboard</title>
    <style>
        body {
            max-width: 600px;
            margin: auto;
            padding: 20px;
        }

        .post {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
        }

        .post-date {
            font-size: 0.8em;
            color: gray;
        }

        form {
            margin-top: 30px;
        }

        input, textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
<h1>Noticeboard</h1>

<?php foreach (array_reverse($posts) as $post): ?>
    <div class="post">
        <strong><?= $post['name'] ?></strong> wrote:
        <div><?= $post['content'] ?></div>
        <div class="post-date"><?= $post['date'] ?></div>
    </div>
<?php endforeach; ?>

<h2>New Post</h2>
<form method="post" action="">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required>

    <label for="content">Content:</label>
    <textarea name="content" id="content" rows="5" required></textarea>

    <button type="submit">Post</button>
</form>
</body>
</html>