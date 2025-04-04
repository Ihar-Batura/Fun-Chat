import { UserAuthentication, UserAuthenticationError } from '../types/types';
import createModalWindow from '../popups/modal_window';
import { user } from '../constants/variables';

function workWithUserAuthenticationResponse(response: string) {
  const data: UserAuthentication | UserAuthenticationError = JSON.parse(response);

  if (data.type === 'USER_LOGIN') {
    user.isLogined = true;
    console.log(user.login, user.isLogined);
  } else if (data.type === 'ERROR') {
    user.isLogined = false;
    const errorText: string = data.payload.error;
    createModalWindow(errorText);
  }
}

export default workWithUserAuthenticationResponse;
