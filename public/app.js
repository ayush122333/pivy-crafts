const hamburger = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const body = document.querySelector('body')

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    body.classList.toggle("overflow");
});