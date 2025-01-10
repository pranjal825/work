// Get the button by its ID
const enrollBtn = document.getElementById('enrollBtn');

// Add a click event listener to the button
enrollBtn.addEventListener('click', function() {
  // Action to be performed when the button is clicked
  alert('Thank you for enrolling in the workshop! We will send more details soon.');
  // Optionally, you can redirect the user to a different page
  // window.location.href = 'https://example.com/thank-you';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  