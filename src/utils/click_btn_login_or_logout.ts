import createPageLogin from '../pages/login';
import addRoutePath from '../routes/add_route_path';
import sendUserLogoutToServer from '../sockets/user_logout';

function clickBtnLoginOrLogout(btn: HTMLButtonElement): void {
  const btnText: string | null = btn.textContent;

  if (btnText === 'LogIn') {
    createPageLogin();
    addRoutePath('#/login');
  } else {
    sendUserLogoutToServer();
  }
}

export default clickBtnLoginOrLogout;
