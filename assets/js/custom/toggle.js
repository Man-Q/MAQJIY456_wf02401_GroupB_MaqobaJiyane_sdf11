

// Get references to the button and content elements
const toggleButton = document.getElementById('mobile-menu-toggle');
const content = document.getElementById('mobile-menu');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the display property of the content element
  if (content.style.display === 'none') {
    content.style.display = 'flex';
  } else {
    content.style.display = 'none';
  }
});
