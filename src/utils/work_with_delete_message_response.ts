import { SendMessageToUserResponse, ServerResponseError } from '../types/types';
import createModalWindow from '../popups/modal_window';
import getMessageHistoryWithUser from '../sockets/get_message_history_with_user';

function workWithDeleteMessageResponse(response: string): void {
  const data: SendMessageToUserResponse | ServerResponseError = JSON.parse(response);

  if (data.type === 'MSG_DELETE') {
    getMessageHistoryWithUser();
  } else if (data.type === 'ERROR') {
    const errorText: string = data.payload.error;
    createModalWindow(errorText);
  }
}

export default workWithDeleteMessageResponse;
