// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// let menuOpen = false;

// hamburger.addEventListener('click', () => {
//     if (menuOpen == false) {
//         navLinks.style.display = "block";
//         menuOpen = true;
//     }
//     else if (menuOpen == true) {
//         navLinks.style.display = "none";
//         menuOpen = false;
//     }   
// });

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});