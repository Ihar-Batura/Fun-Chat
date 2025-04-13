import clearBody from '../utils/clear_body';
import { user } from '../constants/variables';
import createHeader from '../ui/header';
import createMain from '../ui/main';
import createFooter from '../ui/footer';
import createElement from '../create/create_element';
import changeElementText from '../utils/change_element_text';
import addRoutePath from '../routes/add_route_path';
import createError from '../ui/error';

function createPageError(): void {
  clearBody();

  const body: HTMLElement = document.body;

  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
    parent: main,
  });

  const errorMessage: HTMLElement = createError();

  mainWrapper.append(errorMessage);

  const footer: HTMLElement = createFooter();

  body.append(header, main, footer);

  if (user.isLogined) {
    changeElementText('btn-login-logout', 'Logout');
  }

  addRoutePath('#/404');
}

export default createPageError;
