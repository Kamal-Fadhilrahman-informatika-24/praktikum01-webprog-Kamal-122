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