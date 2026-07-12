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
// ==========================
// Scroll Animation
// ==========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach(element => {

    observer.observe(element);

});
// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// ==========================
// Typing Animation
// ==========================

const typingElement = document.getElementById("typing");

const words = [
    "Aspiring Software Developer",
    "Java Developer",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);
    }
    else {

        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 100;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    }
    else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;

    }
    else if (deleting) {

        speed = 50;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();
