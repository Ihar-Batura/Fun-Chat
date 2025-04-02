import createElement from '../create/create_element';
import createHeaderLogo from './logo';
import createHeaderBtns from './header_btns';

function createHeader(): HTMLElement {
  const header: HTMLElement = createElement({ tag: 'header', classes: ['header'] });

  const wrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'header-wrapper'],
    parent: header,
  });

  const logo: HTMLElement = createHeaderLogo();

  const btns: HTMLElement = createHeaderBtns();

  wrapper.append(logo, btns);

  return header;
}

export default createHeader;
