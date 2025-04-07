import { UserLogout, UserAuthenticationError } from '../types/types';
import createModalWindow from '../popups/modal_window';
import { user } from '../constants/variables';
import createPageLogin from '../pages/login';
import addRoutePath from '../routes/add_route_path';
import deleteUserLoginAndPasswordFromSessionStorage from '../storage/delete_user_login_and_password_from_SS';

function workWithUserLogoutResponse(response: string): void {
  const data: UserLogout | UserAuthenticationError = JSON.parse(response);

  if (data.type === 'USER_LOGOUT') {
    user.isLogined = false;
    createPageLogin();
    addRoutePath('#/login');
    deleteUserLoginAndPasswordFromSessionStorage();
    user.login = '';
    user.password = '';
  } else if (data.type === 'ERROR') {
    const errorText: string = data.payload.error;
    createModalWindow(errorText);
  }
}

export default workWithUserLogoutResponse;
