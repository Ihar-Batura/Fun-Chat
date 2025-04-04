import createDialogElement from '../create/create_dialog';
import createElement from '../create/create_element';
import createButton from '../create/create_button';
import closeDialog from '../utils/close_dialog';

function createModalWindow(errorText: string): void {
  const body: HTMLElement = document.body;
  const dialog: HTMLDialogElement = createDialogElement({
    classes: ['modal-window', 'modal-error'],
  });

  createElement({
    tag: 'div',
    classes: ['modal-error-text'],
    text: `${errorText.slice(0, 1).toUpperCase()}${errorText.slice(1)}`,
    parent: dialog,
  });

  const btnCancel: HTMLButtonElement = createButton({
    classes: ['btn', 'btn-error'],
    text: 'Ok',
    parent: dialog,
  });

  btnCancel.addEventListener('click', function (event: MouseEvent) {
    event.preventDefault();
    closeDialog(dialog);
  });

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeDialog(dialog);
    }
  });

  body.append(dialog);
  dialog.showModal();
}

export default createModalWindow;
