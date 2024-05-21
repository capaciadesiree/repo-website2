// JavaScript to control Nav items fullscreen background visibility
document.querySelector('.burger-icon').addEventListener('click', function() {
    // Toggle class to rotate bars and change to X
    document.querySelector('.burger-icon').classList.toggle('open');
    
    // Toggle fullscreen background visibility
    document.querySelector('.collapsed-bg').classList.toggle('open');
    document.querySelector('.collapsed-nav-items').classList.toggle('visible');
}); 

// JavaScript to control toggle switch and background image
document.addEventListener('DOMContentLoaded', function () {
    // Set default background image on page load
    document.documentElement.setAttribute('data-theme', 'default');
    document.body.classList.add('toggle-background-default');
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.toggle-checkbox');
    const codingText = document.querySelector('.toggle-text-left');
    const designText = document.querySelector('.toggle-text-right');

    // Initially hide "CODE" text
    codingText.style.display = 'none';

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            codingText.style.display = 'block'; // Show "CODE" text
            designText.style.display = 'none'; // Hide "DESIGN" text
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.remove('toggle-background-light');
            document.body.classList.add('toggle-background-dark'); // Add CSS class for dark background image
        } else {
            codingText.style.display = 'none'; // Hide "CODE" text
            designText.style.display = 'block'; // Show "DESIGN" text
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.remove('toggle-background-dark');
            document.body.classList.add('toggle-background-light'); // Add CSS class for light background image
        }
    });
});