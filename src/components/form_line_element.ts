import { FormLineElement } from '../types/types';
import createElement from '../create/create_element';
import createInput from '../create/create_input';
import isValidFormInput from '../utils/check_is_valid_form_input';

function createFormLineElement({
  parent,
  labelText,
  inputId,
  inputType,
  inputTitle,
  inputMinLength,
  pattern,
  inputRules,
  spanId,
  spanText,
}: FormLineElement): void {
  const loginLabel = createElement({
    tag: 'label',
    classes: ['form-label'],
    text: labelText,
    parent: parent,
  });

  loginLabel.setAttribute('for', inputId);

  const span: HTMLElement = createElement({
    tag: 'span',
    classes: ['login-span'],
    id: spanId,
    text: spanText,
  });

  const input: HTMLInputElement = createInput({
    classes: ['form-input'],
    id: inputId,
    type: inputType,
    title: inputTitle,
    required: 'true',
    minLength: inputMinLength,
    pattern: pattern,
    addRules: inputRules,
    onInput: () => isValidFormInput(input, span),
    parent: parent,
  });

  parent.append(span);
}

export default createFormLineElement;
