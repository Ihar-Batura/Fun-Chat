import getLoginFormData from '../utils/get_loginform_data';
import { FormData } from '../types/types';
import { socketState } from '../constants/variables';
import { UserAuthentication } from '../types/types';
import getUniqueID from '../utils/get_unique_ID';
import { user, socketRequestID } from '../constants/variables';
import saveUserLoginAndPasswordToSessionStorage from '../storage/save_user_login_and_password_to_SS';

let userLogin: string;
let userPassword: string;

function sendLoginDataToServer(): void {
  const requestId: string = getUniqueID();
  socketRequestID.userAuthentication = requestId;
  const socketIsOpen: boolean = socketState.isSocketOpen;
  const socket: WebSocket | null = socketState.socket;
  const loginFormData: FormData = getLoginFormData();

  if (user.isLogined && user.password) {
    userLogin = user.login;
    userPassword = user.password;
  } else if (loginFormData.login !== null && loginFormData.password !== null) {
    userLogin = loginFormData.login;
    userPassword = loginFormData.password;
  }

  const userData: UserAuthentication = {
    id: requestId,
    type: 'USER_LOGIN',
    payload: {
      user: {
        login: userLogin,
        password: userPassword,
      },
    },
  };

  user.login = userLogin; // Save login in variable user
  user.password = userPassword; // Save password in variable

  saveUserLoginAndPasswordToSessionStorage({ login: user.login, password: user.password });

  if (socketIsOpen && socket !== null) {
    socket.send(JSON.stringify(userData));
  }
}

export default sendLoginDataToServer;
