// Jawaban No. 4
let ulang = confirm("Apakah anda mau mengulang?");
let hitung = 0;

while (ulang) {
  hitung++;
  ulang = confirm("Apakah anda mau mengulang?");
}
document.write("Perulangan sudah dilakukan sebanyak " + hitung + " kali");
