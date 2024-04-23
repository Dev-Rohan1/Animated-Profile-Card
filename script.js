const img = document.querySelector("img");
const contant = document.querySelector(".contant");
const text = document.querySelector(".text");
const buttons = document.querySelector(".buttons");

img.onclick = function () {
  img.classList.toggle("active");
  text.classList.toggle("hide");
  contant.classList.toggle("hide");
  buttons.classList.toggle("hide");
};
