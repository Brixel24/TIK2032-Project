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

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailFormat)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function submitForm(event) {
    event.preventDefault();

    if (validateForm()) {
        const form = document.getElementById("contactForm");
        form.submit();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", submitForm);
});
