// Buat tombol scroll-to-top secara dinamis
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = `
  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
  </svg>
`;

// Tambahkan styling Tailwind-style via classList
scrollBtn.className = `
  fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg
  hover:bg-green-700 transition-opacity opacity-0 pointer-events-none z-50
`;

// Tambahkan ke body
document.body.appendChild(scrollBtn);

// Tampilkan tombol saat scroll > 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("opacity-0", "pointer-events-none");
  } else {
    scrollBtn.classList.add("opacity-0", "pointer-events-none");
  }
});

// Scroll ke atas saat tombol diklik
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
