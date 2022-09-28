const inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);

inputRef.addEventListener(`input`, (event) => {
    inputRef.value.length >= 1
      ? (outputRef.textContent = inputRef.value)
      : (outputRef.textContent = `Anonymous`);
})