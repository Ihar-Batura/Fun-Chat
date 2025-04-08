import './sass/style.scss';
import checkPageRoute from './routes/check_page_route';
import createPageLogin from './pages/login';
import addRoutePath from './routes/add_route_path';
import startWebSocket from './sockets/open_WS';
import { user } from './constants/variables';
import { User } from './types/types';
import getUserLoginAndPasswordFromSessionStorage from './storage/get_user_login_and_password_from_SS';
import createPageMain from './pages/main';

const userData: User | null = getUserLoginAndPasswordFromSessionStorage();
if (userData === null) {
  createPageLogin();
  checkPageRoute();
  addRoutePath('#/login');
} else {
  user.login = userData.login;
  user.password = userData.password;
  user.isLogined = true;
  createPageMain();
  checkPageRoute();
}

startWebSocket();
