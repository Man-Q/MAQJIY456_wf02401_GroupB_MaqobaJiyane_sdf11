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

document.addEventListener('DOMContentLoaded', function() {
  // Get reference to the element displaying the count statistic
  var countStat = document.getElementById('count-stat-3');
  
  // Extract target value, decimal places, and animation duration from attributes
  var targetValue = parseFloat(countStat.getAttribute('countto'));
  var decimalPlaces = parseInt(countStat.getAttribute('decimal-places'));
  var duration = 2000; 

  // Extract initial value from the content of the element
  var startValue = parseFloat(countStat.textContent);
  var startTime = null;

  // Function to animate the count
  function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;

      // Calculate the new value based on the progress of time
      var newValue = startValue + (targetValue - startValue) * (progress / duration);
      countStat.textContent = newValue.toFixed(decimalPlaces);

      // Continue the animation if the duration is not exceeded
      if (progress < duration) {
          requestAnimationFrame(animateCount);
      } else {
          // Ensure the final value is displayed accurately
          countStat.textContent = targetValue.toFixed(decimalPlaces);
      }
  }

  // Initiate the animation
  requestAnimationFrame(animateCount);
});
