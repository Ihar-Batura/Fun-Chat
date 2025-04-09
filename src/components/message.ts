import { Message } from '../types/types';
import { user } from '../constants/variables';
import createElement from '../create/create_element';
import transformTimeStampToDate from '../utils/transform_timestamp_to_date';
import createButton from '../create/create_button';

function createMessage(messageData: Message): HTMLElement {
  const isSendMessage: boolean = messageData.from === user.login;
  const date: string = transformTimeStampToDate(messageData.datetime);
  const container: HTMLElement = createElement({ tag: 'div', classes: ['message-container'] });
  const messageHeader: HTMLElement = createElement({
    tag: 'div',
    classes: ['message-header'],
    parent: container,
  });

  createElement({
    tag: 'div',
    classes: ['message-header-name'],
    text: `${isSendMessage ? 'you' : messageData.from}`,
    parent: messageHeader,
  });

  createElement({
    tag: 'div',
    classes: ['message-header-time'],
    text: date,
    parent: messageHeader,
  });

  createElement({
    tag: 'div',
    classes: ['message-body-text'],
    text: messageData.text,
    parent: container,
  });

  if (isSendMessage) {
    container.classList.add('your-message');
    const messageFooter: HTMLElement = createElement({
      tag: 'div',
      classes: ['message-footer'],
      parent: container,
    });

    createElement({
      tag: 'div',
      classes: ['message-footer-status', 'message-state'],
      parent: messageFooter,
    });

    createButton({ classes: ['btn', 'message-btn-edit', 'message-state'], parent: messageFooter });
    createButton({
      classes: ['btn', 'message-btn-remove', 'message-state'],
      parent: messageFooter,
    });
  } else {
    container.classList.add('contact-message');
  }
  return container;
}

export default createMessage;
