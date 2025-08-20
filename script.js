const display = document.querySelector("#display");
const button = document.querySelectorAll(".btn");
const clrButton = document.querySelector(".btn-clr");
const delButton = document.querySelector(".btn-del");
const eqlButton = document.querySelector(".eql");

function appendToDisplay(e) {
  display.value += e.target.value;
}

button.forEach((btn) => {
  btn.addEventListener("click", appendToDisplay);
});

function clearDisplay() {
  display.value = "";
}
clrButton.addEventListener("click", clearDisplay);

function deleteDisplay() {
  display.value = display.value.toString().slice(0, -1);
}

delButton.addEventListener("click", deleteDisplay);

function equalToDisplay() {
  display.value = eval(display.value);
}
eqlButton.addEventListener("click", equalToDisplay);
