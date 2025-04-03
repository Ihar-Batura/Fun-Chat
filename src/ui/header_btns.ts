import createElement from '../create/create_element';
import createButton from '../create/create_button';
import createPageAbout from '../pages/about';
import clickBtnLoginOrLogout from '../utils/click_btn_login_or_logout';

function createHeaderBtns(): HTMLElement {
  const btnsContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['header-btns-container'],
  });

  createButton({
    classes: ['btn', 'header-btn', 'btn-about'],
    text: 'About',
    onClick: () => createPageAbout(),
    parent: btnsContainer,
  });

  createButton({
    classes: ['btn', 'header-btn', 'btn-login-logout'],
    text: 'LogIn',
    onClick: () => clickBtnLoginOrLogout(),
    parent: btnsContainer,
  });

  return btnsContainer;
}

export default createHeaderBtns;
