import createElement from '../create/create_element';

function createPopupNoConnectServer(): HTMLElement {
  const popup: HTMLElement = createElement({ tag: 'div', classes: ['popup', 'popup-connect'] });

  const popupTextContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['popup-text-container'],
    parent: popup,
  });

  createElement({
    tag: 'div',
    classes: ['popup-text-title'],
    text: `The connection to the server isn't open!`,
    parent: popupTextContainer,
  });

  createElement({
    tag: 'div',
    classes: ['popup-text-title'],
    text: 'Reconnecting...',
    parent: popupTextContainer,
  });

  createElement({
    tag: 'div',
    classes: ['popup-img'],
    parent: popupTextContainer,
  });

  return popup;
}

export default createPopupNoConnectServer;
