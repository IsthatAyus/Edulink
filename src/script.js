function openLoginModal() {
    window.location.href = "pages/login.html";
}
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("show");
}

let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = slider.querySelectorAll('img');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) currentSlide = totalSlides - 1;
  else if (index >= totalSlides) currentSlide = 0;
  else currentSlide = index;
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

// Optional: Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

showSlide(0);
