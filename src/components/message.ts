import { Message } from '../types/types';
import { user } from '../constants/variables';
import createElement from '../create/create_element';
import transformTimeStampToDate from '../utils/transform_timestamp_to_date';
import createButton from '../create/create_button';
import findMessageStatus from '../utils/find_message_status';
import addMessageStatusElement from './message_status';
import deleteMessage from '../sockets/delete_message';
import startEditMessageText from '../utils/start_edit_message_text';

function createMessage(messageData: Message): HTMLElement {
  const isSendMessage: boolean = messageData.from === user.login;
  const date: string = transformTimeStampToDate(messageData.datetime);
  const messageId: string = messageData.id;

  const container: HTMLElement = createElement({
    tag: 'div',
    classes: ['message-container'],
    id: `${messageId}`,
  });
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
  const messageFooter: HTMLElement = createElement({
    tag: 'div',
    classes: ['message-footer'],
    parent: container,
  });

  if (isSendMessage) {
    container.classList.add('your-message');
    const statusEdit: string = findMessageStatus(messageData.status, true);
    addMessageStatusElement(messageFooter, statusEdit);
    const statusDelivery: string = findMessageStatus(messageData.status, false);
    addMessageStatusElement(messageFooter, statusDelivery, messageId);

    createButton({
      classes: ['btn', 'message-btn-edit', 'message-state'],
      onClick: () => startEditMessageText(messageData.id, messageData.text),
      parent: messageFooter,
    });
    createButton({
      classes: ['btn', 'message-btn-remove', 'message-state'],
      onClick: () => deleteMessage(messageData.id),
      parent: messageFooter,
    });
  } else {
    container.classList.add('contact-message');
    const statusEdit: string = findMessageStatus(messageData.status, true);
    if (statusEdit) {
      addMessageStatusElement(messageFooter, statusEdit);
    }
  }
  return container;
}

export default createMessage;
