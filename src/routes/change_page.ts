import createPageLogin from '../pages/login';
import createPageAbout from '../pages/about';
import addRoutePath from './add_route_path';
import { user } from '../constants/variables';
import createPageMain from '../pages/main';

function changePage(): void {
  const hash: string = window.location.hash;

  if (hash === '' || (hash === '#/login' && !user.isLogined)) {
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
    console.log('Error hash path');
  }
}

export default changePage;
