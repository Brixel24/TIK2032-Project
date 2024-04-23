document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            var targetId = this.getAttribute("href").substring(1); 
            var targetSection = document.getElementById(targetId); 
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" }); 
            }
        });
    });
});
