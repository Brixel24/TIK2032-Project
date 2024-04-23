<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Clark Rotinsulu">
        <meta name="description" content="This is my contacts.">
        <title>Contact | Personal Page Clark</title>
        <link rel="icon" href="contacticon.jpg" type="image/x-icon">
        <link rel="stylesheet" href="contact.css">
    </head>
    
    <body>
        <header>
            <h1>Welcome To My Personal Page</h1>
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
            <section>
            <h2>Contact Me</h2>
            
            <form action="https://httpbin.org/get" method="get">
                <fieldset>
                    <legend>Send Me a Message</legend>
                    <p>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="your name" required>
                    </p>
                    <p>
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="email" placeholder="your email" required>
                    </p>
                    <p>
                        <label for="message">Your Message:</label>
                        <br>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Type your message here"></textarea>
                    </p>
                </fieldset>
                <button type="submit">Send</button>
                <button type="reset">Reset</button>
            </form>
            </section>
            <section>
                <h2>Contact</h2>
                <p> Email : clarkrotinsulu026@student.unsrat.ac.id
                    <br> Phone : 082293947884</p>
            </section>
        </main>
        <hr>
        <footer>
            <p>Clark Rotinsulu © 220211060067</p>
        </footer>

        <!-- JavaScript code for form validation -->
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                var form = document.querySelector("form");

                form.addEventListener("submit", function(event) {
                    var name = document.getElementById("name").value;
                    var email = document.getElementById("email").value;
                    var message = document.getElementById("message").value;
                    
                    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
                        event.preventDefault();
                        alert("Please fill in all fields.");
                    }
                });
            });
        </script>
    </body>
</html>
