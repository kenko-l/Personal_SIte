document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    function fadeIn(element) {
        if (element) {
            element.classList.add('visible');
        }
    }

    // Fade in content on page load
    fadeIn(content);
});