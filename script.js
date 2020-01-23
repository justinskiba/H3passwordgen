var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*=-_";
var lowercaseInput = document.getElementById("lowercase");
var uppercaseInput = document.getElementById("uppercase");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("punctuation");
var lengthInput = document.getElementById("length");
var generateButton = document.getElementById("generate");
var passwordField = document.getElementById("pass-field");
var plength;
var userPassword;
var passwordCharSet;
var clipboardButton = document.getElementById("clipboard");

function generate() {
  userPassword = "";
  passwordCharSet = "";
  if (lowercaseInput.checked) {
    passwordCharSet += lowercase;
  }
  if (uppercaseInput.checked) {
    passwordCharSet += uppercase;
  }
  if (numBox.checked) {
    passwordCharSet += num;
  }
  if (symBox.checked) {
    passwordCharSet += sym;
  }
  plength = Number(lengthInput.value);

  for (let i = 0; i < plength; i++) {
    userPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
  }
  if (userPassword == "") {
    let alertbox = document.getElementById("alert");
    alertbox.innerHTML = "Please select an option before generating";
    alertbox.classList.add("fail");
  } else {
    passwordField.value = userPassword;
  }
}

generateButton.addEventListener("click", generate);

function clipboard() {
  passwordField.select();
  passwordField.setSelectionRange(0, 99999);

  document.execCommand("copy");
}
generateButton.addEventListener("click", clipboard);
