import createDialogElement from '../create/create_dialog';
import createElement from '../create/create_element';
import createButton from '../create/create_button';
import closeDialog from '../utils/close_dialog';

function createModalWindow(errorText: string): void {
  const body: HTMLElement = document.body;

  const isExistDialog: Element | null = document.querySelector('.modal-window');
  if (isExistDialog && isExistDialog instanceof HTMLDialogElement) {
    isExistDialog.showModal();
    return;
  }

  const dialog: HTMLDialogElement = createDialogElement({
    classes: ['modal-window', 'modal-error'],
  });

  createElement({
    tag: 'div',
    classes: ['modal-error-text'],
    text: `${errorText.slice(0, 1).toUpperCase()}${errorText.slice(1)}`,
    parent: dialog,
  });

  createButton({
    classes: ['btn', 'btn-error'],
    text: 'Ok',
    onClick: () => closeDialog(dialog),
    parent: dialog,
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeDialog(dialog);
      document.removeEventListener('keydown', handleKeyDown);
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  body.append(dialog);
  dialog.showModal();
}

export default createModalWindow;
