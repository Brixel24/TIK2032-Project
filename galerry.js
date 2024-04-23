document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.classList.add("hover");
        });

        button.addEventListener("mouseleave", function() {
            this.classList.remove("hover");
        });
    });
});

function handleImageHover(event) {
    const hoveredImage = event.target; 
    const imageUrl = hoveredImage.getAttribute('src'); 

    const previewContainer = document.createElement('div');
    previewContainer.classList.add('image-preview-container');

    const previewImage = document.createElement('img');
    previewImage.classList.add('preview-image');
    previewImage.src = imageUrl; 

    previewContainer.appendChild(previewImage);

    document.body.appendChild(previewContainer);

    previewContainer.style.left = event.clientX + 'px';
    previewContainer.style.top = event.clientY + 'px';
}

function handleImageLeave() {
    const previewContainer = document.querySelector('.image-preview-container');
    if (previewContainer) {
        document.body.removeChild(previewContainer);
    }
}

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
    image.addEventListener('mouseenter', handleImageHover);
    image.addEventListener('mouseleave', handleImageLeave);
});
