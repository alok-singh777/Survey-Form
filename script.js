const form = document.getElementById('survey-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();  // Stop the page from reloading

  form.reset();  // Clear the form fields

  confirmationMessage.style.display = 'block';  // Show the thank-you message

  confirmationMessage.scrollIntoView({ behavior: 'smooth' });  // Scroll to the message

  // Hide the message after 5 seconds
  setTimeout(() => {
    confirmationMessage.style.display = 'none';
  }, 5000);
});
