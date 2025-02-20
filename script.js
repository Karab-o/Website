// Hamburger menu toggle for mobile view
document.getElementById("hamburger").addEventListener("click", function () {
    const navMenu = document.getElementById("navbar");
    navMenu.classList.toggle("show");
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill out all fields before submitting.");
    }
});
