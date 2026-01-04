let nilaiMax = parseInt(prompt("Masukkan Nilai Maksimum: (Eg. 1-10)"));

while (!nilaiMax){
    nilaiMax = parseInt(prompt("Masukkan Nilai Maksimum: (Eg. 1-10)"));
}

const angkaRandom = Math.floor(Math.random() * nilaiMax) + 1;
console.log(angkaRandom);

let guess = parseInt(prompt(`Tebak Angka Antara 1 Sampai ${nilaiMax}:`));
let attempts = 1;

while (parseInt(guess) !== angkaRandom){
    attempts++;

    if(guess > angkaRandom){
        guess = parseInt(prompt('Nilai Terlalu Tinggi! Coba Lagi:'));
    }else{
        guess = parseInt(prompt('Nilai Terlalu Rendah! Coba Lagi:'));
    }
}

//Tampilkan Di Halaman Web
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `
<div>
    <i class="icon fa-solid fa-circle-check"></i>
    <p class = "p2">Tebakan Anda: <strong>${guess}</strong></p>
    <p class = "p2">Jumlah Percobaan Anda: <strong>${attempts}</strong> kali</p>
</div>
`;

//Menampilkan Container Hasil
document.querySelector('.hdrcontainer2').style.display = 'block';