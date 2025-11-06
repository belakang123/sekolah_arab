// Buat container iklan
const bottomAd = document.createElement("div");
bottomAd.style.position = "fixed";
bottomAd.style.bottom = "-250px";
bottomAd.style.left = "0";
bottomAd.style.width = "100%";
bottomAd.style.background = "#000";
bottomAd.style.display = "flex";          // flexbox
bottomAd.style.alignItems = "center";
bottomAd.style.justifyContent = "space-between";
bottomAd.style.padding = "10px 40px";     // beri jarak kiri-kanan
bottomAd.style.boxShadow = "0 -4px 15px rgba(0,0,0,0.4)";
bottomAd.style.transition = "bottom 0.6s ease";
bottomAd.style.zIndex = "9999";

// Tombol close
const closeBtn = document.createElement("button");
closeBtn.textContent = "✕";
closeBtn.style.position = "absolute";
closeBtn.style.right = "10px";
closeBtn.style.top = "10px";
closeBtn.style.background = "rgba(0,0,0,0.6)";
closeBtn.style.border = "none";
closeBtn.style.color = "white";
closeBtn.style.fontSize = "16px";
closeBtn.style.padding = "5px 10px";
closeBtn.style.borderRadius = "4px";
closeBtn.style.cursor = "pointer";
closeBtn.style.zIndex = "10000";

// Teks kiri
const leftText = document.createElement("div");
leftText.textContent = "🔥 Promo Hebat!";
leftText.style.color = "white";
leftText.style.fontSize = "18px";
leftText.style.fontWeight = "bold";
leftText.style.marginRight = "20px";

const idText = document.createElement("a");
idText.href = "";
idText.target = "_blank";

// Teks kanan
const rightText = document.createElement("div");
rightText.textContent = "Klik untuk detail ➡️";
rightText.style.color = "white";
rightText.style.fontSize = "16px";
rightText.style.marginLeft = "20px";

idText.appendChild(rightText);

// Gambar iklan
const adLink = document.createElement("a");
adLink.href = "https://produkmu.com";
adLink.target = "_blank";

const adImage = document.createElement("img");
adImage.src = "../assets/perkotaan.jpg";
adImage.alt = "Iklan Produk";
adImage.style.maxWidth = "600px";
adImage.style.width = "100%";
adImage.style.height = "auto";
adImage.style.display = "block";
adImage.style.cursor = "pointer";

adLink.appendChild(adImage);

// Masukkan elemen ke container
bottomAd.appendChild(closeBtn);
bottomAd.appendChild(leftText);
bottomAd.appendChild(adLink);
bottomAd.appendChild(rightText);

// Tambahkan ke body
document.body.appendChild(bottomAd);

// Fungsi tampilkan iklan
function showAd() {
  setTimeout(() => {
    bottomAd.style.bottom = "0";
  }, 1000);
}

// Fungsi tutup iklan
closeBtn.addEventListener("click", () => {
  bottomAd.style.bottom = "-250px";
  localStorage.setItem("adClosed", Date.now());
});

// Cek apakah user sudah menutup iklan dalam 30 menit terakhir
const adClosed = localStorage.getItem("adClosed");
const thirtyMinutes = 30 * 60 * 1000;

if (!adClosed || Date.now() - adClosed > thirtyMinutes) {
  window.addEventListener("load", showAd);
}
