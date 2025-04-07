import { socketState } from '../constants/variables';
import { UserLogout } from '../types/types';
import getUniqueID from '../utils/get_unique_ID';
import workWithUserLogoutResponse from '../utils/work_with_user_logout_response';
import { user } from '../constants/variables';

function processServerResponse(event: MessageEvent): void {
  const response: string = event.data;
  workWithUserLogoutResponse(response);
}

function sendUserLogoutToServer(): void {
  const userLogin: string = user.login;
  const userPassword: string | undefined = user.password;
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;
  const requestId: string = getUniqueID();

  if (userLogin && userPassword !== undefined) {
    const userData: UserLogout = {
      id: requestId,
      type: 'USER_LOGOUT',
      payload: {
        user: {
          login: userLogin,
          password: userPassword,
        },
      },
    };

    if (socketIsOpen && socket !== null) {
      socket.send(JSON.stringify(userData));

      socket.removeEventListener('message', processServerResponse);
      socket.addEventListener('message', processServerResponse);
    }
  }
}

export default sendUserLogoutToServer;
