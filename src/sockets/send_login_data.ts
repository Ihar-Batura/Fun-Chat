import getLoginFormData from '../utils/get_loginform_data';
import { FormData } from '../types/types';
import { socketState } from '../constants/variables';
import { UserAuthentication } from '../types/types';
import getUniqueID from '../utils/get_unique_ID';
import workWithUserAuthenticationResponse from '../utils/work_with_user_authentication_response';
import { user } from '../constants/variables';

function processServerResponse(event: MessageEvent) {
  const response: string = event.data;

  workWithUserAuthenticationResponse(response);
}

function sendLoginDataToServer(): void {
  const loginFormData: FormData = getLoginFormData();
  const requestId: string = getUniqueID();
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;

  if (loginFormData.login !== null && loginFormData.password !== null) {
    const userData: UserAuthentication = {
      id: requestId,
      type: 'USER_LOGIN',
      payload: {
        user: {
          login: loginFormData.login,
          password: loginFormData.password,
        },
      },
    };

    user.login = loginFormData.login; // Save login in variable user

    if (socketIsOpen && socket !== null) {
      socket.send(JSON.stringify(userData));

      socket.removeEventListener('message', processServerResponse);
      socket.addEventListener('message', processServerResponse);
    }
  }
}

export default sendLoginDataToServer;
