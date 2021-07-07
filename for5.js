//Jawaban no 5

let input = prompt("Sebutkan kepanjangan dari nama IB?");

if (input == "Impact Byte") {
  document.write("<h5>Selamat jawaban kamu benar</h5>");
  alert("Selamat jawaban kamu benar");
} else {
  document.write("<h5>Jawaban salah, silahkan coba lagi</h5>");
  alert("Jawaban salah, silahkan coba lagi");
}
while (input) {
  input = prompt("Sebutkan kepanjangan dari nama IB?");
}
