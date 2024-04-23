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


function showImagePreview() {
    var images = document.querySelectorAll('.gallery img');
    
    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            var modal = document.createElement('div');
            modal.classList.add('modal');
            
            var modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        
            modal.appendChild(modalImg);
            
            document.body.appendChild(modal);
    
            image.addEventListener('mouseout', function() {
                modal.remove();
            });
        });
    });
}

window.addEventListener('load', showImagePreview);
