var ham = document.querySelector(".ham");
var line1 = document.querySelector(".line-1");
var line2 = document.querySelector(".line-2");
var line3 = document.querySelector(".line-3");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const body = document.querySelector('body');

ham.addEventListener("click", () => {
    line1.classList.toggle("anim1");
    line2.classList.toggle("anim2");
    line3.classList.toggle("anim3");
    navLinks.classList.toggle("open");
    body.classList.toggle("overflow");
})