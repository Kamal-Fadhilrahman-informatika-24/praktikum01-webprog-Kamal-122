function showMessage() {
    alert("Terima kasih telah mengunjungi portofolio saya!");
}

let tombol = document.getElementById("btn");
if (tombol) {
    tombol.addEventListener("click", showMessage);
}