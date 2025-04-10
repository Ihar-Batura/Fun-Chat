import { socketState, socketRequestID } from '../constants/variables';
import getUniqueID from '../utils/get_unique_ID';
import { MessageDeletionRequest } from '../types/types';

function deleteMessage(id: string): void {
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;
  const requestId: string = getUniqueID();
  socketRequestID.deleteMessage = requestId;

  const request: MessageDeletionRequest = {
    id: requestId,
    type: 'MSG_DELETE',
    payload: {
      message: {
        id: id,
      },
    },
  };

  if (socketIsOpen && socket !== null) {
    socket.send(JSON.stringify(request));
  }
}

export default deleteMessage;
