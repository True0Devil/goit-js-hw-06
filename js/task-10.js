const mainBoxRef = document.querySelector('#boxes');
const createDivBtnRef = document.querySelector(`[data-create]`);
const clearBtnRef = document.querySelector(`[data-destroy]`);
const inputRef = document.querySelector('#controls>input');

createDivBtnRef.addEventListener('click', onCreateBtnClick);
clearBtnRef.addEventListener('click', onClearBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxWidthAndHeight = 30;
  for (let i = 1; i <= amount; i += 1) {
    if (i > 1) {
      boxWidthAndHeight += 10;
    }

    const createdBox = document.createElement('div');

    createdBox.style.width = `${boxWidthAndHeight}px`;
    createdBox.style.height = `${boxWidthAndHeight}px`;
    createdBox.style.backgroundColor = getRandomHexColor();

    mainBoxRef.appendChild(createdBox);
  }
}

function destroyBoxes() {
  mainBoxRef.innerHTML = '';
}

function onCreateBtnClick(event) {
  destroyBoxes();
  createBoxes(inputRef.value);
  inputRef.value = '';
}

function onClearBtnClick(event) {
  destroyBoxes();
}
