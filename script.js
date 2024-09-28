document.addEventListener('DOMContentLoaded', function() {
    const projectLink = document.getElementById('project-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');

    function fadeInContent() {
        const content = document.getElementById('content');
        content.classList.add('fade-in');
        setTimeout(() => {
            content.classList.add('visible');
        }, 100);
    }

    projectLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'about.html';
    });

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'contact.html';
    });

    // Fade in content on page load
    fadeInContent();
});