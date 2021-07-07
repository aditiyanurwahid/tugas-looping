//  Jawaban nomor 4
let ulang = true;
let counter = 0;

while (ulang) {
  counter++;
  ulang = confirm("Apakah anda mau mengulang?");
}
alert("Perulangan sudah dilakukan sebanyak " + counter + " kali");

document.write("Perulangan sudah dilakukan sebanyak " + counter + " kali");
