document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    function fadeIn(element) {
        if (element) {
            element.style.opacity = '0';
            element.classList.add('visible');
            setTimeout(() => {
                element.style.opacity = '1';
            }, 10);
        }
    }

    // Fade in content on page load
    fadeIn(content);
});