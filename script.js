
let tombol = document.getElementById("btn");
let judul = document.getElementById("judul");

tombol.addEventListener("click", function() {
    alert("Halo! Terima kasih sudah berkunjung.");
    
    tombol.style.backgroundColor = "#27ae60"; 
    tombol.innerText = "Sudah Disapa";
});

judul.addEventListener("click", function() {
    judul.style.color = "#c0392b"; 
});

/* =========================================
   LOGIKA UNTUK HALAMAN INDEX (HOME)
   ========================================= */
let tombolSapa = document.getElementById("btn");
let judulUtama = document.getElementById("judul");

if (tombolSapa) {
    tombolSapa.addEventListener("click", function() {
        alert("Halo! Terima kasih sudah berkunjung.");
        tombolSapa.style.backgroundColor = "#27ae60"; 
        tombolSapa.innerText = "Sudah Disapa";
    });
}

if (judulUtama) {
    judulUtama.addEventListener("click", function() {
        judulUtama.style.color = "#c0392b"; 
    });
}

/* =========================================
   LOGIKA UNTUK HALAMAN ABOUT
   ========================================= */

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

    pesanDinamis.innerText = sapaan;
}

function gantiHobi(hobi) {
    let infoBox = document.getElementById("info-hobi");
    
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

        infoBox.style.opacity = 1;
    }, 200);
}