function isValidFormInput(id: string): void {
  const formInput: HTMLInputElement | null = document.querySelector(`#${id}`)
  const spanError: HTMLSpanElement | null = document.querySelector(
    `#${id}-rules`
  )

  if (formInput && spanError) {
    const valueLength: number = formInput.value.length
    const valueIsValid: boolean = formInput.validity.valid
    if (valueLength > 0) {
      if (valueIsValid) {
        formInput.classList.remove('input-invalid')
        spanError.classList.remove('input-error')
        formInput.classList.add('input-valid')
      } else {
        formInput.classList.remove('input-valid')
        formInput.classList.add('input-invalid')
        spanError.classList.add('input-error')
      }
    }
    if (valueLength === 0) {
      formInput.classList.remove('input-valid')
      formInput.classList.remove('input-invalid')
      spanError.classList.remove('input-error')
    }
  }
}

export default isValidFormInput
