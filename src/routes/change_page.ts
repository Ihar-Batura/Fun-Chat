import createPageLogin from '../pages/login';
import createPageAbout from '../pages/about';

function changePage(): void {
  const hash: string = window.location.hash;

  if (hash === '' || hash === '#/login') {
    createPageLogin();
    console.log('create Login page');
  } else if (hash === '#/main') {
    console.log('create main page');
  } else if (hash === '#/about') {
    createPageAbout();
  } else {
    console.log('Error hash path');
  }
}

export default changePage;
