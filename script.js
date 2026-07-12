// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ==========================
// Smooth Scrolling
// ==========================

const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

        navLinks.classList.remove("active");

    });

});


// ==========================
// Contact Form
// ==========================

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Message sent.");

});