import createElement from '../create/create_element';

function createHeaderLogo(): HTMLElement {
  const logoContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['logo-container'],
  });

  createElement({
    tag: 'div',
    classes: ['logo-container-img'],
    parent: logoContainer,
  });

  createElement({
    tag: 'h1',
    classes: ['logo-container-text'],
    text: 'Fun Chat',
    parent: logoContainer,
  });

  return logoContainer;
}

export default createHeaderLogo;
