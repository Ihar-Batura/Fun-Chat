import createPageLogin from '../pages/login';
import createPageAbout from '../pages/about';
import addRoutePath from './add_route_path';
import { user } from '../constants/variables';
import createPageMain from '../pages/main';
import createPageError from '../pages/404';

function changePage(): void {
  const hash: string = window.location.hash;

  if (
    (hash === '' && !user.isLogined) ||
    (hash === '#/' && !user.isLogined) ||
    (hash === '#/login' && !user.isLogined)
  ) {
    createPageLogin();
    addRoutePath('#/login');
  } else if (hash === '#/login' && user.isLogined) {
    createPageMain();
  } else if (hash === '#/main' && !user.isLogined) {
    createPageLogin();
    addRoutePath('#/login');
  } else if (hash === '#/main' && user.isLogined) {
    createPageMain();
  } else if (hash === '#/about') {
    createPageAbout();
  } else {
    createPageError();
  }
}

export default changePage;
