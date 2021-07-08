// Jawaban no 5
let tanya = prompt("Sebutkan kepanjangan dari nama IB?");

while (tanya != null) {
  if (tanya != "Impact Byte") {
    tanya = prompt("Jawaban kamu salah!!! Silahkan ulangi.\n Sebutkan kepanjangan dari nama IB?");
  } else {
    alert("Selamat jawaban kamu benar");
    break;
  }
}
document.write("Selamat jawaban kamu benar");
