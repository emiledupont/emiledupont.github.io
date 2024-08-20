// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');

            sections.forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
        });
    });
});