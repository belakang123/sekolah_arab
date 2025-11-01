// === Loading Screen Full JavaScript ===

const loadingScreen = document.createElement("div");
loadingScreen.className =
  "fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 transition duration-700";

loadingScreen.innerHTML = `
  <div class="text-center space-y-4">
    <div class="w-16 h-16 border-4 border-gray-300 border-t-green-400 rounded-full animate-spin mx-auto"></div>
    <h2 class="text-2xl font-arab font-bold text-green-400">بسم الله</h2>
    <p class="text-lg font-semibold text-gray-200 flex justify-center">
      Memuat<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
    </p>
  </div>
`;

const style = document.createElement("style");
style.textContent = `
  .dot {
    animation: blink 1.5s infinite;
  }
  .dot:nth-child(2) { animation-delay: 0.3s; }
  .dot:nth-child(3) { animation-delay: 0.6s; }

  @keyframes blink {
    0%, 80%, 100% { opacity: 0; }
    40% { opacity: 1; }
  }
`;
document.head.appendChild(style);

document.body.appendChild(loadingScreen);

window.addEventListener("load", () => {
  loadingScreen.classList.add("opacity-0");
  setTimeout(() => loadingScreen.remove(), 700);
});
