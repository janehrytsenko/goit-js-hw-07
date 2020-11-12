const input = document.querySelector("#validation-input");
const dataLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInputCheckLength);

function onInputCheckLength(event) {
  const valueLength = event.currentTarget.value.length;

  switch (valueLength) {
    case dataLength:
          input.classList.replace('invalid', 'valid');
      break;

    default:
      input.classList.replace('valid', 'invalid');
      input.classList.add('invalid');
      break;
  }
}
