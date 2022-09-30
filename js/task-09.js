function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const currenColor = document.querySelector(".color");

btnRef.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  currenColor.textContent = randomColor;
}
