import { FetchMessageHistoryWithUserResponse, ServerResponseError, Message } from '../types/types';
import createModalWindow from '../popups/modal_window';
import clearElement from './clear_element';
import addMessagesToMessageContainer from './add_messages_to_message_container';

function workWithMessageHistoryWithUserResponse(response: string): void {
  const data: FetchMessageHistoryWithUserResponse | ServerResponseError = JSON.parse(response);

  if (data.type === 'MSG_FROM_USER') {
    const messageContainer: Element | null = document.querySelector(
      '.user-dialogue-content-container'
    );
    const arrMessages: Message[] = data.payload.messages;

    if (messageContainer) {
      if (arrMessages.length < 1) {
        messageContainer.textContent = 'No messages yet...';
      } else {
        messageContainer.textContent = '';
        clearElement('user-dialogue-content-container');
        addMessagesToMessageContainer(messageContainer, arrMessages);
      }
    }
  } else if (data.type === 'ERROR') {
    const errorText: string = data.payload.error;
    createModalWindow(errorText);
  }
}

export default workWithMessageHistoryWithUserResponse;
