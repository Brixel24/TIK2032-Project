<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Clark Metthew Rotinsulu">
        <meta name="description" content="Here You Can See My Galery">
        <title>Gallery | Personal Homepage Clark</title>
        <link rel="icon" href="galeryicon.png" type="image/x-icon">
        <link rel="stylesheet" href="galerry.css">
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
                    <a href="galery.html" target="gallery">
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
                <img src="gitar.jpg" alt="image">
                <img src="keyboard.jpg" alt="image">
                <img src="drum.jpeg" alt="image">
            </div>
        </main>
        <hr>
        <footer>
            <p>Clark Rotinsulu © 220211060067</p>
        </footer>

        <!-- JavaScript code for image gallery functionality -->
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                const images = document.querySelectorAll(".gallery img");
                
                // Function to handle image click event
                function handleImageClick(event) {
                    const clickedImage = event.target;
                    const modal = document.createElement("div");
                    modal.classList.add("modal");
                    
                    // Create modal content
                    const modalContent = document.createElement("img");
                    modalContent.src = clickedImage.src;
                    modalContent.alt = clickedImage.alt;
                    
                    // Close modal when clicking outside of the image
                    modal.addEventListener("click", function(event) {
                        if (event.target === modal) {
                            modal.remove();
                        }
                    });
                    
                    // Append modal content to modal
                    modal.appendChild(modalContent);
                    
                    // Append modal to the body
                    document.body.appendChild(modal);
                }
                
                // Attach click event listener to each image
                images.forEach(image => {
                    image.addEventListener("click", handleImageClick);
                });
            });
        </script>
    </body>
</html>
