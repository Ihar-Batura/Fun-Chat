import createElement from '../create/create_element';
import createInput from '../create/create_input';
import getAllAuthenticatedUsersFromServer from '../sockets/get_all_authenticate_users';
import getAllUnauthorizedUsersFromServer from '../sockets/get_all_unauthorized_users';
import searchUserInUserList from '../utils/search_user_in_user_list';

function createUsersListContainer(): HTMLElement {
  const container: HTMLElement = createElement({
    tag: 'div',
    classes: ['chat-container-users-list'],
  });

  createInput({
    classes: ['users-list-search-input'],
    type: 'text',
    placeholder: 'Search...',
    onInput: () => searchUserInUserList(),
    parent: container,
  });

  createElement({
    tag: 'div',
    classes: ['user-list-users-container'],
    parent: container,
  });

  getAllAuthenticatedUsersFromServer();
  getAllUnauthorizedUsersFromServer();

  return container;
}

export default createUsersListContainer;
