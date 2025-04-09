import { Message } from '../types/types';
import createMessage from '../components/message';

function addMessagesToMessageContainer(messageContainer: Element, arrMessages: Message[]): void {
  console.log(arrMessages);
  arrMessages.forEach((el: Message) => {
    const message: HTMLElement = createMessage(el);
    messageContainer.append(message);
  });
}

export default addMessagesToMessageContainer;
