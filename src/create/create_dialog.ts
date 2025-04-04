import { CreateDialog } from '../types/types';

function createDialogElement(options: CreateDialog): HTMLDialogElement {
  const { classes = [], id, parent } = options;

  const dialog: HTMLDialogElement = document.createElement('dialog');

  if (classes.length > 0) {
    dialog.classList.add(...classes);
  }
  if (id) {
    dialog.id = id;
  }
  if (parent != null) {
    parent.append(dialog);
  }

  return dialog;
}

export default createDialogElement;
