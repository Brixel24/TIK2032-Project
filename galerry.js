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

function addImageListeners() {
    const images = document.querySelectorAll(".gallery img");
    images.forEach(image => {
        image.addEventListener("click", function() {
            previewImage(image);
        });
    });
}


function previewImage(image) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalImg = document.createElement("img");
    modalImg.src = image.src;
    modalImg.alt = image.alt;

    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    modal.addEventListener("click", function() {
        modal.remove();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addImageListeners();
});
