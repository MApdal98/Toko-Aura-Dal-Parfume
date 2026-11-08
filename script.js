// Data parfum
let namaParfum = ["MONACO-ROYALE", "CALIFORNIA-BLUE", "GLITCH X ADESETIAWAN"];
let hargaParfum = [285000, 225000, 275000];

// Fungsi menampilkan pesan
function tampilkanPesan() {
    alert("Selamat datang di AURA DAL PARFUME!");
}

// Fungsi melihat parfum
function lihatParfum(nama) {
    alert("Kamu memilih parfum " + nama);
}

// Fungsi menambahkan ke keranjang
let keranjang = [];

function tambahKeranjang(nama) {
    keranjang.push(nama);

    alert(nama + " berhasil ditambahkan ke keranjang!");

    console.log("Isi keranjang:", keranjang);
}

// Fungsi menampilkan harga
function tampilkanHarga(index) {
    alert(
        "Harga " + namaParfum[index] +
        " adalah Rp" + hargaParfum[index]
    );
}

// Fungsi menghitung total
function hitungTotal() {
    let total = 0;

    for (let i = 0; i < keranjang.length; i++) {
        let index = namaParfum.indexOf(keranjang[i]);
        total += hargaParfum[index];
    }

    alert("Total belanja: Rp" + total);
}