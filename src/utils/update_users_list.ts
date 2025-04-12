import clearElement from './clear_element';
import getAllAuthenticatedUsersFromServer from '../sockets/get_all_authenticate_users';
import getAllUnauthorizedUsersFromServer from '../sockets/get_all_unauthorized_users';

function updateUsersList(): void {
  clearElement('user-list-users-container');
  getAllAuthenticatedUsersFromServer();
  getAllUnauthorizedUsersFromServer();
}

export default updateUsersList;
