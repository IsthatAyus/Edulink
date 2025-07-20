function openLoginModal() {
    window.location.href = "pages/login.html";
}
let currentSlideIndex = 0;
const slides = $('.slider img');
const dots = $('.dot');
const totalSlides = slides.length;

function showSlide(index) {
  const slider = $('#slider');
  currentSlideIndex = (index + totalSlides) % totalSlides;
  slider.css('transform', `translateX(-${currentSlideIndex * 100}%)`);

  // Update dots
  dots.each(function(i) {
    $(this).toggleClass('active', i === currentSlideIndex);
  });
}

function moveSlide(direction) {
  showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
  showSlide(index - 1);
}

// Auto-slide functionality
setInterval(() => {
  moveSlide(1);
}, 5000);

// Mobile menu toggle
function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.querySelector('.menu-toggle');

  if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
    navbar.classList.remove('show');
  }
});
