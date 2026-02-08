// Ambil elemen
let tombol = document.getElementById("btn");
let judul = document.getElementById("judul");

// Event Listener Tombol
tombol.addEventListener("click", function() {
    alert("Halo! Terima kasih sudah berkunjung.");
    
    // Ubah warna tombol jadi hijau kalem saat diklik
    tombol.style.backgroundColor = "#27ae60"; 
    tombol.innerText = "Sudah Disapa";
});

// Event Listener Judul
judul.addEventListener("click", function() {
    // Ubah warna judul jadi aksen merah bata
    judul.style.color = "#c0392b"; 
});

/* =========================================
   LOGIKA UNTUK HALAMAN INDEX (HOME)
   ========================================= */
let tombolSapa = document.getElementById("btn");
let judulUtama = document.getElementById("judul");

// Cek apakah elemen 'btn' ada (artinya kita sedang di index.html)
if (tombolSapa) {
    tombolSapa.addEventListener("click", function() {
        alert("Halo! Terima kasih sudah berkunjung.");
        tombolSapa.style.backgroundColor = "#27ae60"; 
        tombolSapa.innerText = "Sudah Disapa";
    });
}

// Cek apakah elemen 'judul' ada
if (judulUtama) {
    judulUtama.addEventListener("click", function() {
        judulUtama.style.color = "#c0392b"; 
    });
}

/* =========================================
   LOGIKA UNTUK HALAMAN ABOUT
   ========================================= */

// 1. Fitur Pesan Otomatis berdasarkan Waktu (Manipulasi DOM)
// Ini akan berjalan otomatis saat halaman about dimuat
let pesanDinamis = document.getElementById("pesan-dinamis");

if (pesanDinamis) {
    let jam = new Date().getHours();
    let sapaan;

    if (jam < 12) {
        sapaan = "Selamat Pagi! Semangat belajar coding hari ini.";
    } else if (jam < 18) {
        sapaan = "Selamat Siang/Sore! Jangan lupa istirahat sejenak.";
    } else {
        sapaan = "Selamat Malam! Waktunya evaluasi materi hari ini.";
    }

    // Mengisi text konten ke dalam elemen <p id="pesan-dinamis">
    pesanDinamis.innerText = sapaan;
}

// 2. Fungsi untuk Mengganti Keterangan Hobi (Interaktif)
// Fungsi ini dipanggil oleh onclick="..." di HTML
function gantiHobi(hobi) {
    let infoBox = document.getElementById("info-hobi");
    
    // Reset style sebentar untuk efek kedip (opsional)
    infoBox.style.opacity = 0;

    setTimeout(function() {
        if (hobi === 'Coding') {
            infoBox.innerText = "Coding merupakan hobi sekaligus sarana belajar utama bagi saya. Melalui aktivitas ini, saya dapat melatih kemampuan berpikir logis, problem solving, dan memahami cara kerja sebuah sistem. Saya menikmati proses menulis kode, mencoba hal baru, serta memperbaiki kesalahan (debugging) karena dari situlah saya banyak belajar dan berkembang sebagai mahasiswa informatika.";
            infoBox.style.backgroundColor = "#dff9fb"; // Biru muda
            infoBox.style.border = "1px solid #22a6b3";
        } else if (hobi === 'Gaming') {
            infoBox.innerText = "Gaming menjadi salah satu cara saya untuk mengisi waktu luang sekaligus melatih fokus dan strategi berpikir. Dari bermain game, saya belajar tentang pengambilan keputusan, kerja sama tim, serta manajemen emosi. Aktivitas ini juga membantu saya menjaga keseimbangan antara belajar dan hiburan agar tetap produktif.";
            infoBox.style.backgroundColor = "#ff7979"; // Merah muda
            infoBox.style.border = "1px solid #eb4d4b";
        } else if (hobi === 'Reading') {
            infoBox.innerText = "Membaca adalah hobi yang membantu saya memperluas wawasan, baik dalam bidang teknologi maupun pengetahuan umum. Saya senang membaca artikel, dokumentasi, maupun konten edukatif yang berkaitan dengan informatika. Melalui membaca, saya dapat memahami konsep baru, mendapatkan sudut pandang berbeda, dan terus memperkaya pengetahuan saya.";
            infoBox.style.backgroundColor = "#badc58"; // Hijau muda
            infoBox.style.border = "1px solid #6ab04c";
        }
        // Munculkan kembali
        infoBox.style.opacity = 1;
    }, 200); // jeda 0.2 detik agar transisi terasa
}