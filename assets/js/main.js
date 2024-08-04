// Initialize Typed.js for the hero section
var options = {
  strings: ["Cyber Security Expert", "Freelancer", "Tech Innovator"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
};
var typed = new Typed(".typed", options);

// Initialize AOS for animations
AOS.init({
  duration: 1200 // Animation duration
});

document.addEventListener('DOMContentLoaded', function() {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });

          // Hide the sidebar on small screens after clicking a section link
          if (window.innerWidth <= 768) {
              sidebar.classList.add('hide');
          }
      });
  });

  // Sidebar toggle functionality
  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');

  function toggleSidebar() {
      sidebar.classList.toggle('hide');
  }

  if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', toggleSidebar);
  }
});
