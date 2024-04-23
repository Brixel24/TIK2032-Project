<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Clark Metthew Rotinsulu">
    <meta name="description" content="Here You Can See My Gallery">
    <title>Gallery | Personal Homepage Clark</title>
    <link rel="icon" href="galeryicon.png" type="image/x-icon">

    <style>
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 10px;
        }
        .gallery img {
            width: 200px;
            height: 200px;
            display: block;
            cursor: pointer; /* Add cursor pointer for better UX */
        }
    </style>
</head>

<body>
<header>
    <h1>Welcome to My Personal Page</h1>
    <nav>
        <div>
            <a href="index.html" target="home">
                <button class="button">Home</button>
            </a>
            <a href="gallery.html" target="gallery">
                <button class="button">Gallery</button>
            </a>
            <a href="blog.html" target="blog">
                <button class="button">Blog</button>
            </a>
            <a href="contact.html" target="contact">
                <button class="button">Contact</button>
            </a>
        </div>
    </nav>
</header>
<hr>
<main>
    <h2>Gallery</h2>
    <div class="gallery">
        <img src="gitar.jpg" alt="image" onclick="showImage(this.src)">
        <img src="keyboard.jpg" alt="image" onclick="showImage(this.src)">
        <img src="drum.jpeg" alt="image" onclick="showImage(this.src)">
    </div>
</main>
<hr>
<footer>
    <p>Clark Rotinsulu &copy; 220211060067</p>
</footer>

<!-- JavaScript to display larger image -->
<script>
    function showImage(src) {
        var enlargedImage = document.createElement('img');
        enlargedImage.src = src;
        enlargedImage.style.width = '100%';
        enlargedImage.style.height = 'auto';
        enlargedImage.style.display = 'block';
        enlargedImage.style.margin = 'auto';

        var modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.zIndex = '9999';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';

        modal.appendChild(enlargedImage);
        document.body.appendChild(modal);

        modal.onclick = function() {
            modal.remove();
        };
    }
</script>
</body>

</html>
