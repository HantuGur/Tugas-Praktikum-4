// Fungsi JS ini HANYA digunakan untuk toggle hamburger menu (sesuai ketentuan poin 8)

document.addEventListener("DOMContentLoaded", function () {
  var hamburgerBtn = document.getElementById("hamburgerBtn");
  var navMenu = document.getElementById("navMenu");

  hamburgerBtn.addEventListener("click", function () {
    var isOpen = navMenu.classList.toggle("is-open");
    hamburgerBtn.classList.toggle("is-active");
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Tutup menu otomatis saat salah satu link navigasi diklik (mobile)
  var navLinks = navMenu.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("is-open");
      hamburgerBtn.classList.remove("is-active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });
});