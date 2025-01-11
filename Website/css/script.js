

// JS code 
// JavaScript for a parallax effect
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const parallaxBg = document.querySelector('.content-main');
  parallaxBg.style.transform = `translateY(${scrollPosition * 0.3}px)`; // Adjust 0.5 for effect strength
});


document.getElementById('overlay-box1').addEventListener('mouseover', function(){
  let overlay = document.getElementById('overlay-box1')
  // overlay.style.display='flex'
  overlay.style.opacity='100%'
  overlay.style.backgroundColor='rgba(0, 0, 0, 0.8)'
})
document.getElementById('overlay-box1').addEventListener('mouseout', function(){
  let overlay = document.getElementById('overlay-box1')
  // overlay.style.display='flex'
  overlay.style.opacity='0%'
})


document.getElementById('overlay-box2').addEventListener('mouseover', function(){
  let overlay = document.getElementById('overlay-box2')
  // overlay.style.display='flex'
  overlay.style.opacity='100%'
  overlay.style.backgroundColor='rgba(0, 0, 0, 0.8)'
})
document.getElementById('overlay-box2').addEventListener('mouseout', function(){
  let overlay = document.getElementById('overlay-box2')
  // overlay.style.display='flex'
  overlay.style.opacity='0%'
})


document.getElementById('overlay-box3').addEventListener('mouseover', function(){
  let overlay = document.getElementById('overlay-box3')
  // overlay.style.display='flex'
  overlay.style.opacity='100%'
  overlay.style.backgroundColor='rgba(0, 0, 0, 0.8)'
})
document.getElementById('overlay-box3').addEventListener('mouseout', function(){
  let overlay = document.getElementById('overlay-box3')
  // overlay.style.display='flex'
  overlay.style.opacity='0%'
})


document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  toggleButton.addEventListener('click', function () {
    // Toggle the 'cross' class to switch between icons
    toggleButton.classList.toggle('cross');
  });

  // Optional: Close the menu when clicking outside (mobile optimization)
  document.addEventListener('click', function (e) {
    if (!navbarCollapse.contains(e.target) && !toggleButton.contains(e.target)) {
      toggleButton.classList.remove('cross'); // Reset to default icon
      navbarCollapse.classList.remove('show'); // Close navbar
    }
  });
});

