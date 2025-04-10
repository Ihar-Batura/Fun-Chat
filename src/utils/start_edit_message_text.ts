import { isEditMessage } from '../constants/variables';

function startEditMessageText(messageId: string, messageText: string): void {
  const dialogueInput: Element | null = document.querySelector('.user-dialogue-form-input');

  if (dialogueInput && dialogueInput instanceof HTMLInputElement) {
    dialogueInput.value = messageText;

    isEditMessage.id = messageId;
    isEditMessage.value = true;
  }
}

export default startEditMessageText;
