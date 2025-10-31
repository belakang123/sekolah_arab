
  const MODAL_KEY = 'donationLastShown';
  const MODAL_INTERVAL = 5 * 60 * 1000; // 5 menit dalam milidetik

  function showDonation() {
    document.getElementById('donationModal').classList.remove('hidden');
  }

  function closeDonation() {
    document.getElementById('donationModal').classList.add('hidden');
    sessionStorage.setItem(MODAL_KEY, Date.now().toString());
  }

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, a');

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const isDonasiBtn = btn.classList.contains('donasi-btn');
        const lastShown = parseInt(sessionStorage.getItem(MODAL_KEY) || '0', 10);
        const now = Date.now();

        // Tampilkan modal jika belum pernah ditampilkan atau sudah lewat 5 menit
        if (!isDonasiBtn && (isNaN(lastShown) || now - lastShown >= MODAL_INTERVAL)) {
          e.preventDefault();
          showDonation();
        }
      });
    });
  });
