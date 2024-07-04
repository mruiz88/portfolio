// Select the navigation toggle button and navigation links
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link")

// Add an event listener to the toggle button to open/close the navigation menu
navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

// Add event listeners to each navigation link to close the menu on click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});