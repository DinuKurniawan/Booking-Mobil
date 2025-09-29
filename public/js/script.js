document.addEventListener("DOMContentLoaded", function () {
  // 1. Logika Toggle Menu Mobile
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // Isi menu mobile
  mobileMenu.innerHTML = `
      <a href="#mobil" class="block p-2 text-gray-600 hover:bg-blue-100 rounded">Pilihan Mobil</a>
      <a href="#kenapa" class="block p-2 text-gray-600 hover:bg-blue-100 rounded">Keunggulan</a>
      <a href="#testimoni" class="block p-2 text-gray-600 hover:bg-blue-100 rounded">Testimoni</a>
      <a href="#" class="block mt-2 px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg text-center">Masuk</a>
  `;

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // 2. Logika Form Booking Sederhana (Simulasi Validasi)
  const bookingForm = document.getElementById("booking-form");
  const bookingMessage = document.getElementById("booking-message");

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah submit form ke server

    // Ambil nilai input
    const lokasi = document.getElementById("lokasi").value;
    const tglMulai = document.getElementById("tgl_mulai").value;
    const tglSelesai = document.getElementById("tgl_selesai").value;

    // Atur tanggal hari ini
    const today = new Date().toISOString().split("T")[0];

    // Validasi Sederhana
    if (!lokasi || !tglMulai || !tglSelesai) {
      bookingMessage.classList.remove(
        "hidden",
        "bg-green-100",
        "text-green-800"
      );
      bookingMessage.classList.add("bg-red-100", "text-red-800");
      bookingMessage.textContent = "Mohon lengkapi semua kolom pencarian!";
      return;
    }

    if (tglMulai < today) {
      bookingMessage.classList.remove(
        "hidden",
        "bg-green-100",
        "text-green-800"
      );
      bookingMessage.classList.add("bg-red-100", "text-red-800");
      bookingMessage.textContent = "Tanggal mulai tidak boleh di masa lalu.";
      return;
    }

    if (tglMulai >= tglSelesai) {
      bookingMessage.classList.remove(
        "hidden",
        "bg-green-100",
        "text-green-800"
      );
      bookingMessage.classList.add("bg-red-100", "text-red-800");
      bookingMessage.textContent =
        "Tanggal selesai harus setelah tanggal mulai.";
      return;
    }

    // Jika Validasi Berhasil (Simulasi hasil pencarian)
    bookingMessage.classList.remove("hidden", "bg-red-100", "text-red-800");
    bookingMessage.classList.add("bg-green-100", "text-green-800");
    bookingMessage.textContent = `Pencarian berhasil! Menampilkan mobil yang tersedia di ${lokasi} dari ${tglMulai} hingga ${tglSelesai}.`;

    // Di sini Anda bisa mengarahkan pengguna ke halaman hasil pencarian (search-results.html)
    // window.location.href = `search-results.html?lokasi=${lokasi}&start=${tglMulai}&end=${tglSelesai}`;
  });
});
