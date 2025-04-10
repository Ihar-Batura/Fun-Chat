import createElement from '../create/create_element';
import createHeaderLogo from './logo';
import createHeaderBtns from './header_btns';
import { user } from '../constants/variables';

function createHeader(): HTMLElement {
  const header: HTMLElement = createElement({ tag: 'header', classes: ['header'] });

  const wrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'header-wrapper'],
    parent: header,
  });

  const logo: HTMLElement = createHeaderLogo();
  const userName: HTMLElement = createElement({
    tag: 'h4',
    classes: ['header-user-name'],
    text: `${user.login ?? ''}`,
  });

  const btns: HTMLElement = createHeaderBtns();

  wrapper.append(logo, userName, btns);

  return header;
}

export default createHeader;
