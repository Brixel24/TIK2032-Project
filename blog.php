<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .blog-post {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .blog-post:hover {
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            transform: scale(1.01);
        }

        .judul {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
        }

        .link {
            display: block;
            background-color: #333;
            color: #fff;
            text-decoration: none;
            padding: 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
            margin-bottom: 10px;
        }

        .link:hover {
            background-color: #555;
        }

        .deskripsi {
            color: #666;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "web_program";

    // Membuat koneksi
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Mengecek koneksi
    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    $sql = "SELECT id, judul, link, deskripsi FROM blog";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data dari setiap baris
        while($row = $result->fetch_assoc()) {
            echo "<div class='blog-post'>";
            echo "<h2 class='judul'>" . $row["judul"]. "</h2>";
            echo "<a href='" . $row["link"]. "' class='link'>Baca lebih lanjut</a>";
            echo "<p class='deskripsi'>" . $row["deskripsi"]. "</p>";
            echo "</div>";
        }
    } else {
        echo "0 hasil";
    }
    $conn->close();
    ?>
</body>
</html>
