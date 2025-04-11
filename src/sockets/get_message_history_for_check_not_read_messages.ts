import { socketState } from '../constants/variables';
import { FetchMessageHistoryWithUserRequest } from '../types/types';

function getMessageHistoryForCheckNotReadMessages(userName: string): void {
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;

  const request: FetchMessageHistoryWithUserRequest = {
    id: userName,
    type: 'MSG_FROM_USER',
    payload: {
      user: {
        login: userName,
      },
    },
  };

  if (socketIsOpen && socket !== null) {
    socket.send(JSON.stringify(request));
  }
}

export default getMessageHistoryForCheckNotReadMessages;
