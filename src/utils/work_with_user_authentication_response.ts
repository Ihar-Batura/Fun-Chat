import { UserAuthentication, ServerResponseError } from '../types/types';
import createModalWindow from '../popups/modal_window';
import { user } from '../constants/variables';
import createPageMain from '../pages/main';
import deleteUserLoginAndPasswordFromSessionStorage from '../storage/delete_user_login_and_password_from_SS';

function workWithUserAuthenticationResponse(response: string) {
  const data: UserAuthentication | ServerResponseError = JSON.parse(response);

  if (data.type === 'USER_LOGIN') {
    user.isLogined = true;
    createPageMain();
  } else if (data.type === 'ERROR') {
    user.isLogined = false;
    const errorText: string = data.payload.error;
    createModalWindow(errorText);
    deleteUserLoginAndPasswordFromSessionStorage();
  }
}

export default workWithUserAuthenticationResponse;
