// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page in navigation
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
});
