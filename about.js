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