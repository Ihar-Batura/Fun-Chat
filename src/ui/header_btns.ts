import createElement from '../create/create_element';
import createButton from '../create/create_button';

function createHeaderBtns(): HTMLElement {
  const btnsContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['header-btns-container'],
  });

  createButton({
    classes: ['btn', 'header-btn', 'btn-about'],
    text: 'About',
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'header-btn', 'btn-login-logout'],
    text: 'LogIn',
    parent: btnsContainer,
  });

  return btnsContainer;
}

export default createHeaderBtns;
