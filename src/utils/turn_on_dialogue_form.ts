function turnOnDialogueForm(): void {
  const dialogInput: Element | null = document.querySelector('.user-dialogue-form-input');
  const dialogButton: Element | null = document.querySelector('.user-dialogue-form-button');

  if (dialogInput && dialogButton) {
    dialogInput.removeAttribute('disabled');
    dialogButton.removeAttribute('disabled');
  }
}

export default turnOnDialogueForm;
