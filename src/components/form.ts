import createElement from '../functional/create/create_element'
import createInput from '../functional/create/create_input'
import createButton from '../functional/create/create_button'

function createForm(): HTMLElement {
  const form = createElement({ tag: 'form', classes: ['form', 'login-form'] })
  form.setAttribute('autocomplete', 'off')

  createElement({
    tag: 'h2',
    classes: ['form-title'],
    text: 'Authentication',
    parent: form,
  })

  const loginLabel = createElement({
    tag: 'label',
    classes: ['form-label'],
    text: 'Login',
    parent: form,
  })

  loginLabel.setAttribute('for', 'login')

  createInput({
    classes: ['form-input'],
    id: 'login',
    type: 'text',
    title:
      'Enter Login (3-25 latin letters and the hyphen (-) symbol, first letter uppercase)',
    required: 'true',
    minLength: '3',
    pattern: '[A-Z]{1}[a-z\\-]{2,25}',
    addRules: 'login-rules',
    //onInput: () => isValidInput('login'),
    parent: form,
  })

  createElement({
    tag: 'span',
    classes: ['login-span', 'input-error'],
    id: 'login-rules',
    text: 'Minimum 3 characters, the first letter is in uppercase',
    parent: form,
  })

  const passwordLabel = createElement({
    tag: 'label',
    classes: ['form-label'],
    text: 'Password',
    parent: form,
  })
  passwordLabel.setAttribute('for', 'password')

  createInput({
    classes: ['form-input'],
    id: 'password',
    type: 'password',
    title:
      'Enter Password (6-25 latin letters, numbers and the hyphen (-) symbol)',
    required: 'true',
    minLength: '6',
    pattern: '[A-Za-z0-9\\-]{6,25}',
    addRules: 'password-rules',
    //onInput: () => isValidInput('password'),
    parent: form,
  })

  createElement({
    tag: 'span',
    classes: ['password-span', 'input-error'],
    id: 'password-rules',
    text: 'Minimum 6 characters, only letters, numbers and the hyphen (-) symbol',
    parent: form,
  })

  createButton({
    classes: ['btn', 'form-btn'],
    text: 'Submit',
    parent: form,
  })

  return form
}

export default createForm
