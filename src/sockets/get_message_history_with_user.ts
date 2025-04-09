import { socketState, socketRequestID, selectedUser } from '../constants/variables';
import getUniqueID from '../utils/get_unique_ID';
import { FetchMessageHistoryWithUserRequest } from '../types/types';

function getMessageHistoryWithUser(): void {
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;
  const requestId: string = getUniqueID();
  socketRequestID.messageHistoryWithUser = requestId;

  const request: FetchMessageHistoryWithUserRequest = {
    id: requestId,
    type: 'MSG_FROM_USER',
    payload: {
      user: {
        login: selectedUser.name,
      },
    },
  };

  if (socketIsOpen && socket !== null) {
    socket.send(JSON.stringify(request));
  }
}

export default getMessageHistoryWithUser;
