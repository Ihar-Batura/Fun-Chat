import { socketState, socketRequestID } from '../constants/variables';
import getUniqueID from '../utils/get_unique_ID';
import { MessageReadStatusChangeRequest } from '../types/types';

function readMessage(id: string): void {
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;
  const requestId: string = getUniqueID();
  socketRequestID.deleteMessage = requestId;

  const request: MessageReadStatusChangeRequest = {
    id: requestId,
    type: 'MSG_READ',
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

export default readMessage;
