import { socketState, selectedUser, socketRequestID } from '../constants/variables';
import { SendMessageToUserRequest } from '../types/types';
import getUniqueID from '../utils/get_unique_ID';

function sendMessageToUser(): void {
  const dialogueInput: Element | null = document.querySelector('.user-dialogue-form-input');
  if (dialogueInput && dialogueInput instanceof HTMLInputElement) {
    const message: string = dialogueInput.value;

    const requestId: string = getUniqueID();
    socketRequestID.sendMessageToUser = requestId;
    const socketIsOpen: boolean = socketState.isSocketOpen;
    const socket: WebSocket | null = socketState.socket;

    const userMessage: SendMessageToUserRequest = {
      id: requestId,
      type: 'MSG_SEND',
      payload: {
        message: {
          to: selectedUser.name,
          text: message,
        },
      },
    };

    if (socketIsOpen && socket !== null) {
      socket.send(JSON.stringify(userMessage));
    }

    dialogueInput.value = '';
  }
}

export default sendMessageToUser;
