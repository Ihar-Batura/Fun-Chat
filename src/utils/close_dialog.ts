function closeDialog(dialog: HTMLDialogElement): void {
  const body: HTMLElement = document.body;

  dialog.close();
  body.childNodes.forEach((el) => {
    if (el === dialog) {
      body.removeChild(dialog);
    }
  });
}

export default closeDialog;
