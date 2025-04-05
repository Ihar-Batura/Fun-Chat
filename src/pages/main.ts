import clearBody from '../utils/clear_body';
import createHeader from '../ui/header';
import createMain from '../ui/main';
import createFooter from '../ui/footer';
import createElement from '../create/create_element';
import changeElementText from '../utils/change_element_text';
import addRoutePath from '../routes/add_route_path';
import createChatContainer from '../ui/chat_container';

function createPageMain(): void {
  clearBody();

  const body: HTMLElement = document.body;

  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper', 'main-page-wrapper'],
    parent: main,
  });

  createElement({
    tag: 'h4',
    classes: ['main-page-user-name'],
    text: 'User name:',
    parent: mainWrapper,
  });

  const chatContainer = createChatContainer();
  mainWrapper.append(chatContainer);

  const footer: HTMLElement = createFooter();

  body.append(header, main, footer);

  changeElementText('btn-login-logout', 'Logout');
  addRoutePath('#/main');
}

export default createPageMain;
