import { FetchMessageHistoryWithUserResponse, ServerResponseError } from '../types/types';
import createModalWindow from '../popups/modal_window';
import countNotReadMessages from './count_not_read_messages';

function workWithNotReadMessagesResponse(response: string) {
  const data: FetchMessageHistoryWithUserResponse | ServerResponseError = JSON.parse(response);

  if (data.type === 'MSG_FROM_USER') {
    const userName: string = data.id;
    const notReadMessages: number = countNotReadMessages(data);
    if (notReadMessages > 0) {
      const user: HTMLElement | null = document.getElementById(`${userName}`);
      if (user) {
        user.textContent = `${notReadMessages}`;
      }
    }
  } else if (data.type === 'ERROR') {
    const errorText: string = data.payload.error;
    createModalWindow(errorText);
  }
}

export default workWithNotReadMessagesResponse;
