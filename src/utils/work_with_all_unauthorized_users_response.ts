import { GetAllUsersResponse, ServerResponseError, User } from '../types/types';
import createModalWindow from '../popups/modal_window';
import addUsersToUserList from './add_users_to_user_list';
import { searchValue } from '../constants/variables';
import searchUserInUserList from './search_user_in_user_list';

function workWithAllUnauthorizedUsersResponse(response: string): void {
  const data: GetAllUsersResponse | ServerResponseError = JSON.parse(response);

  if (data.type === 'USER_INACTIVE') {
    const usersArr: User[] = data.payload.users;
    addUsersToUserList(usersArr);
    searchUserInUserList(searchValue.value);
  } else if (data.type === 'ERROR') {
    const errorText: string = data.payload.error;
    createModalWindow(errorText);
  }
}

export default workWithAllUnauthorizedUsersResponse;
