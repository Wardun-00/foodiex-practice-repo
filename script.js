
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










