import { user } from '../constants/variables';
import { GetAllUsersResponse, ServerResponseError, User } from '../types/types';
import createModalWindow from '../popups/modal_window';
import addUsersToUserList from './add_users_to_user_list';

function workWithAllAuthenticateUsersResponse(response: string): void {
  const data: GetAllUsersResponse | ServerResponseError = JSON.parse(response);

  if (data.type === 'USER_ACTIVE') {
    const usersArr: User[] = data.payload.users;
    const userLogin: string = user.login;
    const userFilterArr: User[] = usersArr.filter((el) => el.login !== userLogin);
    addUsersToUserList(userFilterArr);
  } else if (data.type === 'ERROR') {
    const errorText: string = data.payload.error;
    createModalWindow(errorText);
  }
}

export default workWithAllAuthenticateUsersResponse;
