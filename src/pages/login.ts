import clearBody from '../utils/clear_body';
import createHeader from '../ui/header';
import createMain from '../ui/main';
import createFooter from '../ui/footer';
import createElement from '../create/create_element';
import createForm from '../ui/form';
import addClassToElement from '../utils/add_class_to_element';

function createPageLogin(): void {
  clearBody();

  const body: HTMLElement = document.body;

  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
    parent: main,
  });

  const loginForm: HTMLElement = createForm();
  mainWrapper.append(loginForm);

  const footer: HTMLElement = createFooter();

  body.append(header, main, footer);

  addClassToElement('btn-login-logout', 'active');
}

export default createPageLogin;
