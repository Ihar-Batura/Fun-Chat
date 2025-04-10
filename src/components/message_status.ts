import createElement from '../create/create_element';

function addMessageStatusElement(parent: HTMLElement, status: string, messageId?: string): void {
  if (!status) {
    return;
  } else {
    const stateMessage: HTMLElement = createElement({
      tag: 'div',
      classes: ['message-footer-status', 'message-state'],
      parent: parent,
    });

    stateMessage.classList.add(status);

    if (messageId) {
      stateMessage.setAttribute('id', `${messageId + 'status'}`);
    }
  }
}

export default addMessageStatusElement;
