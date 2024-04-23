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

function handleButtonClick(target) {
    var iframe = document.querySelector('iframe[name="' + target + '"]');
    if (iframe) {
        iframe.src = target + '.html';
    }
}

document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('click', function() {
        var target = this.getAttribute('target');
        handleButtonClick(target);
    });
});
