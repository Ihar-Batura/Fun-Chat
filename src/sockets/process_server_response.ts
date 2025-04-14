import { socketRequestID, selectedUser } from '../constants/variables';
import { ServerResponse } from '../types/types';
import workWithUserAuthenticationResponse from '../utils/work_with_user_authentication_response';
import workWithUserLogoutResponse from '../utils/work_with_user_logout_response';
import workWithAllAuthenticateUsersResponse from '../utils/work_with_all_authenticate_users_response';
import workWithAllUnauthorizedUsersResponse from '../utils/work_with_all_unauthorized_users_response';
import updateUsersList from '../utils/update_users_list';
import workWithMessageHistoryWithUserResponse from '../utils/work_with_message_history_with_user';
import workWithSendMessageToUserResponse from '../utils/work_with_send_message_to_user_response';
import workWithDeleteMessageResponse from '../utils/work_with_delete_message_response';
import workWithEditMessageTextResponse from '../utils/work_with_edit_message_text_response';
import getMessageHistoryWithUser from './get_message_history_with_user';
import changeStatusMessage from '../utils/change_status_message';
import workWithNotReadMessagesResponse from '../utils/work_with_not_read_Messages_response';

function processServerResponse(event: MessageEvent) {
  const response: string = event.data;
  const data: ServerResponse = JSON.parse(response);

  if (data.id !== null) {
    const responseId: string = data.id;

    if (socketRequestID.userAuthentication === responseId) {
      workWithUserAuthenticationResponse(response);
    } else if (socketRequestID.userLogout === responseId) {
      workWithUserLogoutResponse(response);
    } else if (socketRequestID.allAuthenticatedUsers === responseId) {
      workWithAllAuthenticateUsersResponse(response);
    } else if (socketRequestID.allUnauthorizedUsers === responseId) {
      workWithAllUnauthorizedUsersResponse(response);
    } else if (socketRequestID.messageHistoryWithUser === responseId) {
      workWithMessageHistoryWithUserResponse(response);
    } else if (socketRequestID.sendMessageToUser === responseId) {
      workWithSendMessageToUserResponse(response);
    } else if (socketRequestID.deleteMessage === responseId) {
      workWithDeleteMessageResponse(response);
    } else if (socketRequestID.editMessageText === responseId) {
      workWithEditMessageTextResponse(response);
    } else {
      workWithNotReadMessagesResponse(response);
    }
  }

  if (data.id === null) {
    if (data.type === 'USER_EXTERNAL_LOGIN' || data.type === 'USER_EXTERNAL_LOGOUT') {
      updateUsersList();
    } else if (data.type === 'MSG_SEND') {
      if (data.payload.message.from === selectedUser.name) {
        getMessageHistoryWithUser();
        updateUsersList();
      } else {
        updateUsersList();
      }
    } else if (data.type === 'MSG_DELETE') {
      updateUsersList();
      getMessageHistoryWithUser();
    } else if (data.type === 'MSG_EDIT') {
      getMessageHistoryWithUser();
    } else if (data.type === 'MSG_DELIVER') {
      changeStatusMessage(data.payload.message.id, 'deliver');
    } else if (data.type === 'MSG_READ') {
      changeStatusMessage(data.payload.message.id, 'read');
    }
  }
}

export default processServerResponse;
