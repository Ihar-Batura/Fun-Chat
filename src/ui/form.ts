import createElement from '../create/create_element';
import createFormLineElement from '../components/form_line_element';
import createButton from '../create/create_button';

function createForm(): HTMLElement {
  const form: HTMLElement = createElement({ tag: 'form', classes: ['form', 'login-form'] });
  form.setAttribute('autocomplete', 'off');

  createElement({
    tag: 'h2',
    classes: ['form-title'],
    text: 'Authentication',
    parent: form,
  });

  createFormLineElement({
    parent: form,
    labelText: 'Login',
    inputId: 'login',
    inputType: 'text',
    inputTitle:
      'Enter Login (3-15 latin letters and the hyphen (-) symbol, first letter uppercase)',
    inputMinLength: '3',
    pattern: '[A-Z]{1}[a-z\\-]{2,14}',
    inputRules: 'login-rules',
    spanId: 'login-rules',
    spanText: 'Minimum 3 letters, the first letter is in uppercase',
  });

  createFormLineElement({
    parent: form,
    labelText: 'Password',
    inputId: 'password',
    inputType: 'password',
    inputTitle: 'Enter Password (6-20 latin letters, numbers and the hyphen (-) symbol)',
    inputMinLength: '6',
    pattern: '[A-Za-z0-9\\-]{6,20}',
    inputRules: 'password-rules',
    spanId: 'password-rules',
    spanText: 'Minimum 6 characters, only letters, numbers and the hyphen (-) symbol',
  });

  createButton({
    classes: ['btn', 'form-btn'],
    text: 'Submit',
    parent: form,
  });

  return form;
}

export default createForm;
