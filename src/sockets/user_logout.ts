import { socketState } from '../constants/variables';
import { UserAuthentication } from '../types/types';
import getUniqueID from '../utils/get_unique_ID';
import { user, socketRequestID } from '../constants/variables';

function sendUserLogoutToServer(): void {
  const userLogin: string = user.login;
  const userPassword: string | undefined = user.password;
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;
  const requestId: string = getUniqueID();
  socketRequestID.userLogout = requestId;

  if (userLogin && userPassword !== undefined) {
    const userData: UserAuthentication = {
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
    }
  }
}

export default sendUserLogoutToServer;
