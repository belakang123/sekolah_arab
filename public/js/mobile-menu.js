const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menu saat tombol diklik
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Cegah bubbling agar tidak langsung tertutup
  mobileMenu.classList.toggle("hidden");
});

// Tutup menu jika klik di luar menu atau tombol
document.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    mobileMenu.classList.add("hidden");
  }
});
