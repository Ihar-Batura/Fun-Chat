import { socketState, socketRequestID, isEditMessage } from '../constants/variables';
import { MessageTextEditingRequest } from '../types/types';
import getUniqueID from '../utils/get_unique_ID';

function editMessageText(): void {
  const dialogueInput: Element | null = document.querySelector('.user-dialogue-form-input');
  if (dialogueInput && dialogueInput instanceof HTMLInputElement) {
    const message: string = dialogueInput.value;

    const requestId: string = getUniqueID();
    socketRequestID.editMessageText = requestId;
    const socketIsOpen: boolean = socketState.isSocketOpen;
    const socket: WebSocket | null = socketState.socket;

    const userMessage: MessageTextEditingRequest = {
      id: requestId,
      type: 'MSG_EDIT',
      payload: {
        message: {
          id: isEditMessage.id,
          text: message,
        },
      },
    };

    if (socketIsOpen && socket !== null) {
      socket.send(JSON.stringify(userMessage));
    }

    dialogueInput.value = '';
    isEditMessage.value = false;
  }
}

export default editMessageText;
