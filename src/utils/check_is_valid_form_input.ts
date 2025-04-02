function isValidFormInput(input: HTMLInputElement, span: HTMLElement): void {
  const valueLength: number = input.value.length;
  const valueIsValid: boolean = input.validity.valid;

  if (valueLength > 0) {
    if (valueIsValid) {
      input.classList.remove('input-invalid');
      span.classList.remove('input-error');
      input.classList.add('input-valid');
    } else {
      input.classList.remove('input-valid');
      input.classList.add('input-invalid');
      span.classList.add('input-error');
    }
  } else if (valueLength === 0) {
    input.classList.remove('input-valid');
    input.classList.remove('input-invalid');
    span.classList.remove('input-error');
  }
}

export default isValidFormInput;
