document.addEventListener('click', function() {
    var audioElement = document.getElementById('bgm');
    audioElement.play();
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        var audioElement = document.getElementById('bgm');
        audioElement.pause();
    }
});

window.onload = function() {
    let container = document.querySelector('.logo-container');
    
    container.parentNode.appendChild(clone);
};

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const body = document.body;
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    const mainContent = document.querySelector('main.content'); // Get main content

    // Toggle mobile menu visibility
    if (hamburgerIcon && body && mobileNavMenu) {
        hamburgerIcon.addEventListener('click', function() {
            body.classList.toggle('mobile-menu-open');
        });

        // Optional: Close menu when clicking outside of it (on the overlay)
        if (mainContent) {
             // Use event delegation on the body or a containing element
            document.body.addEventListener('click', function(event) {
                // Check if the menu is open and the click is outside the menu and hamburger icon
                if (body.classList.contains('mobile-menu-open') &&
                    !mobileNavMenu.contains(event.target) &&
                    !hamburgerIcon.contains(event.target)) {
                    body.classList.remove('mobile-menu-open');
                }
            });
        }

        // Optional: Close menu when a link is clicked inside the menu
        mobileNavMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                body.classList.remove('mobile-menu-open');
            });
        });
    }

    // Keep your existing BGM script if you have it
    const bgm = document.getElementById('bgm');
    if (bgm) {
        // Add logic here to play/pause BGM if needed
    }
});
