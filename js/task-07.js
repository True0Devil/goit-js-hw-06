const inputRef = document.querySelector(`#font-size-control`);
const textBasedOnInput = document.querySelector(`#text`);

textBasedOnInput.style.fontSize = `${inputRef.value}px`;
inputRef.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  textBasedOnInput.style.fontSize = `${event.currentTarget.value}px`;
}
