import createElement from '../create/create_element';

function createNewMessageLineElement(): HTMLElement {
  const lineContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['dialogue-line-container'],
  });

  createElement({
    tag: 'div',
    classes: ['dialogue-line-line'],
    parent: lineContainer,
  });

  createElement({
    tag: 'div',
    classes: ['dialogue-line-text'],
    text: 'New messages',
    parent: lineContainer,
  });

  createElement({
    tag: 'div',
    classes: ['dialogue-line-line'],
    parent: lineContainer,
  });

  return lineContainer;
}

export default createNewMessageLineElement;
