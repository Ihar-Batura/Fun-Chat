import { socketRequestID } from '../constants/variables';
import { UserAuthentication, ServerResponseError } from '../types/types';
import workWithUserAuthenticationResponse from '../utils/work_with_user_authentication_response';
import workWithUserLogoutResponse from '../utils/work_with_user_logout_response';

function processServerResponse(event: MessageEvent) {
  const response: string = event.data;
  const data: UserAuthentication | ServerResponseError = JSON.parse(response);
  const responseId: string = data.id;

  if (socketRequestID.userAuthentication === responseId) {
    workWithUserAuthenticationResponse(response);
  }
  if (socketRequestID.userLogout === responseId) {
    workWithUserLogoutResponse(response);
  }
}

export default processServerResponse;
