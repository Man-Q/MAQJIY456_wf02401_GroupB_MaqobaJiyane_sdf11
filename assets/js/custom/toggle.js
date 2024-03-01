

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
  var countStat = document.getElementById('count-stat-3');
  var targetValue = parseFloat(countStat.getAttribute('countto'));
  var decimalPlaces = parseInt(countStat.getAttribute('decimal-places'));
  var duration = 2000; // Adjust as needed

  var startValue = parseFloat(countStat.textContent);
  var startTime = null;

  function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;

      var newValue = startValue + (targetValue - startValue) * (progress / duration);
      countStat.textContent = newValue.toFixed(decimalPlaces);

      if (progress < duration) {
          requestAnimationFrame(animateCount);
      } else {
          countStat.textContent = targetValue.toFixed(decimalPlaces);
      }
  }

  requestAnimationFrame(animateCount);
});

