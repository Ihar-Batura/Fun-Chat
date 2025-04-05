import { user } from '../constants/variables';
import createPageMain from '../pages/main';
import createPageLogin from '../pages/login';
import addRoutePath from '../routes/add_route_path';

function clickBtnReturnBack(): void {
  if (user.isLogined) {
    createPageMain();
    addRoutePath('#/main');
  } else {
    createPageLogin();
    addRoutePath('#/login');
  }
}

export default clickBtnReturnBack;
