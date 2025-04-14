import { Message } from '../types/types';
import createMessage from '../components/message';
import { isEditMessage, selectedUser, isNeedToAddNewMessageLine } from '../constants/variables';
import createNewMessageLineElement from '../components/new_message_line';
import scrollToBottomOrElement from './scroll_to_bottom_or_element';

let isAddNewMessageLine: boolean = false;

function addMessagesToMessageContainer(messageContainer: Element, arrMessages: Message[]): void {
  arrMessages.forEach((el: Message) => {
    const conditionsForAddLine: boolean =
      !el.status.isReaded &&
      !isAddNewMessageLine &&
      el.from === selectedUser.name &&
      isNeedToAddNewMessageLine.value;

    if (conditionsForAddLine) {
      const lineElement: HTMLElement = createNewMessageLineElement();
      messageContainer.append(lineElement);
      isAddNewMessageLine = true;
    }
    const message: HTMLElement = createMessage(el);
    messageContainer.append(message);
  });

  isEditMessage.value = false;
  isAddNewMessageLine = false;
  scrollToBottomOrElement();
}

export default addMessagesToMessageContainer;
