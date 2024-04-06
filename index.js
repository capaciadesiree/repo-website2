document.addEventListener('DOMContentLoaded', function () {
    // Set default background image on page load
    document.body.style.backgroundImage = "url('images/designing.jpg')"; // Change to default background image
});

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
        document.body.style.backgroundImage = "url('images/coding.jpg')"; // Change to dark background image
    } else {
        codingText.style.display = 'none'; // Hide "CODE" text
        designText.style.display = 'block'; // Show "DESIGN" text
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.style.backgroundImage = "url('images/designing.jpg')"; // Change to default background image
    }
});