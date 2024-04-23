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

document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.href;
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});

