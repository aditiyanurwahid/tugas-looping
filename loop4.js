// Soal No. 4
// Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();!
// Jawaban
let ulang = confirm("Apakah anda mau mengulang?");
let hitung = 0;

while (ulang) {
  hitung++;
  ulang = confirm("Apakah anda mau mengulang?");
}
document.write("Perulangan sudah dilakukan sebanyak " + hitung + " kali");
