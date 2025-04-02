import { CreateInput } from '../types/types';

function createInput(options: CreateInput): HTMLInputElement {
  const {
    type,
    classes = [],
    id,
    value,
    title,
    required,
    placeholder,
    minLength,
    min,
    pattern,
    addRules,
    onInput,
    parent,
  } = options;

  const input: HTMLInputElement = document.createElement('input');

  input.setAttribute('type', type);
  if (classes.length > 0) {
    input.classList.add(...classes);
  }
  if (id) {
    input.id = id;
  }
  if (value) {
    input.value = value;
  }
  if (title) {
    input.setAttribute('title', title);
  }
  if (required) {
    input.setAttribute('required', '');
  }
  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  }
  if (minLength) {
    input.setAttribute('minlength', minLength);
  }
  if (min) {
    input.setAttribute('min', min);
  }
  if (pattern) {
    input.setAttribute('pattern', pattern);
  }
  if (addRules) {
    input.setAttribute('aria-describedby', addRules);
  }
  if (onInput) {
    input.oninput = onInput;
  }
  if (parent != null) {
    parent.append(input);
  }

  return input;
}

export default createInput;
