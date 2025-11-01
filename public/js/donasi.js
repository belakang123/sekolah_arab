// === Modal Donasi Full JavaScript ===
const MODAL_KEY = 'donationLastShown';
const MODAL_INTERVAL = 5 * 60 * 1000; // 5 menit

function createDonationModal() {
  // Buat overlay
  const overlay = document.createElement('div');
  overlay.id = 'donationModal';
  overlay.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 hidden';

  const modal = document.createElement('div');
  modal.className = 'bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center relative transform transition-all scale-95';

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.className = 'absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold';
  closeBtn.onclick = closeDonation;

  const logo = document.createElement('img');
  logo.src = '../assets/Donasi.png';
  logo.alt = 'Poster Donasi';
  logo.className = 'mx-auto mb-4 w-60 h-60 rounded-md shadow-md object-cover';

  const title = document.createElement('h2');
  title.textContent = '💚 Dukung Dakwah Digital!';
  title.className = 'text-2xl font-bold text-green-700 mb-3';

  const desc = document.createElement('p');
  desc.textContent = 'Bantu kami menyebarkan ilmu dan inspirasi Islami melalui donasi Anda. Setiap kontribusi sangat berarti.';
  desc.className = 'text-gray-700 mb-6';

  const donateBtn = document.createElement('a');
  donateBtn.href = '../public/Donasi.html';
  donateBtn.target = '_blank';
  donateBtn.textContent = 'Donasi Sekarang';
  donateBtn.className = 'inline-block bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 donasi-btn';

  modal.appendChild(closeBtn);
  modal.appendChild(logo);
  modal.appendChild(title);
  modal.appendChild(desc);
  modal.appendChild(donateBtn);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

function showDonation() {
  const modal = document.getElementById('donationModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.firstChild.classList.add('scale-100');
  }
}

function closeDonation() {
  const modal = document.getElementById('donationModal');
  if (modal) {
    modal.classList.add('hidden');
    sessionStorage.setItem(MODAL_KEY, Date.now().toString());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createDonationModal();

  const buttons = document.querySelectorAll('button, a');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const isDonasiBtn = btn.classList.contains('donasi-btn');
      const lastShown = parseInt(sessionStorage.getItem(MODAL_KEY) || '0', 10);
      const now = Date.now();

      if (!isDonasiBtn && (isNaN(lastShown) || now - lastShown >= MODAL_INTERVAL)) {
        e.preventDefault();
        showDonation();
      }
    });
  });
});
