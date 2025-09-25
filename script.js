
//  25% discount clock dasyui comedown

  // Set the countdown target date (YYYY-MM-DD HH:MM:SS)
  const now = new Date();
  const countdownDate = new Date(now.getTime() + 99*24*60*60*1000); // 98 days in ms

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      document.getElementById("days").textContent = 0;
      document.getElementById("hours").textContent = 0;
      document.getElementById("minutes").textContent = 0;
      document.getElementById("seconds").textContent = 0;
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
  
  
  
  
//   ==========================================================
  
  
  
  
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("bg-black/90", "backdrop-blur-md", "shadow-md");
    } else {
      navbar.classList.remove("bg-black/90", "backdrop-blur-md", "shadow-md");
    }
  });






  window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});










