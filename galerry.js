document.addEventListener("DOMContentLoaded", function() {

    const images = document.querySelectorAll(".gallery img");

    images.forEach(function(image) {
        // Add click event listener to each image
        image.addEventListener("click", function() {
            // Create a modal overlay
            const overlay = document.createElement("div");
            overlay.className = "overlay";

            // Create an image element for the modal
            const modalImg = document.createElement("img");
            modalImg.src = this.src;
            modalImg.alt = this.alt;

            // Append the image to the overlay
            overlay.appendChild(modalImg);

            // Create a close button for the modal
            const closeButton = document.createElement("button");
            closeButton.textContent = "Close";
            closeButton.className = "close-button";

            // Add click event listener to close the modal when the close button is clicked
            closeButton.addEventListener("click", function() {
                document.body.removeChild(overlay);
            });

            // Append the close button to the overlay
            overlay.appendChild(closeButton);

            // Append the overlay to the body
            document.body.appendChild(overlay);
        });
    });
});
