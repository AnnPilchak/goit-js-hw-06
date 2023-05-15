const input = document.querySelector('#validation-input');
const length = input.getAttribute('data-length');

input.addEventListener('blur', () => {
    const inputValue = input.value;
    if (inputValue.length === Number(length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
})