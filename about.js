// JavaScript to control Nav items fullscreen background visibility
document.querySelector('.burger-icon').addEventListener('click', function() {
  // Toggle class to rotate bars and change to X
  document.querySelector('.burger-icon').classList.toggle('open');
  
  // Toggle fullscreen background visibility
  document.querySelector('.collapsed-bg').classList.toggle('open');
  document.querySelector('.collapsed-nav-items').classList.toggle('visible');

  // Toggle the hidden class on the logo
  document.querySelector('.logo').classList.toggle('hidden');
}); 

// loader script
document.addEventListener("DOMContentLoaded", function() {
  const percentages = document.querySelectorAll('.percentage');
  percentages.forEach(percentage => {
      const width = percentage.dataset.width;
      percentage.style.width = width;
      percentage.nextElementSibling.textContent = width;
  });
});

// form validation script
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Simulate form submission (replace this with actual form submission logic)
      setTimeout(function () {
          // Show success message
          successMessage.style.display = 'block';

          // Reset form after 3 seconds
          setTimeout(function () {
              form.reset();
              successMessage.style.display = 'none';
          }, 3000);
      }, 1000);
  });
});



/* form without the simulated logic
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    // No need to prevent default behavior; let the form submit naturally

    // Netlify will handle form submission automatically
  });
}); */