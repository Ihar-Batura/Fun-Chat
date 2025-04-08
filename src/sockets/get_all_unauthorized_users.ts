import { socketState, socketRequestID } from '../constants/variables';
import getUniqueID from '../utils/get_unique_ID';
import { GetAllUsersRequest } from '../types/types';

function getAllUnauthorizedUsersFromServer(): void {
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;
  const requestId: string = getUniqueID();
  socketRequestID.allUnauthorizedUsers = requestId;

  const request: GetAllUsersRequest = {
    id: requestId,
    type: 'USER_INACTIVE',
    payload: null,
  };

  if (socketIsOpen && socket !== null) {
    socket.send(JSON.stringify(request));
  }
}

export default getAllUnauthorizedUsersFromServer;
