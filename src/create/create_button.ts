import { CreateButton } from '../types/types';

function createButton(options: CreateButton): HTMLButtonElement {
  const { classes = [], id, text, disabled, name, onClick, parent } = options;

  const button: HTMLButtonElement = document.createElement('button');

  if (classes.length > 0) {
    button.classList.add(...classes);
  }
  if (id) {
    button.id = id;
  }
  if (text) {
    button.textContent = text;
  }
  if (disabled) {
    button.setAttribute('disabled', `${disabled}`);
  }
  if (name) {
    button.setAttribute('name', name);
  }
  if (onClick) {
    button.onclick = onClick;
  }
  if (parent != null) {
    parent.append(button);
  }

  return button;
}

export default createButton;
