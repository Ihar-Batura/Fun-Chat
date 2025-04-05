import createElement from '../create/create_element';
import createInput from '../create/create_input';
import createUser from '../components/user';

function createUsersListContainer(): HTMLElement {
  const container: HTMLElement = createElement({
    tag: 'div',
    classes: ['chat-container-users-list'],
  });

  createInput({
    classes: ['users-list-search-input'],
    type: 'text',
    placeholder: 'Search...',
    parent: container,
  });

  const usersContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['user-list-users-container'],
    parent: container,
  });

  // временно
  const user1 = createUser({
    userIndicator: 'online',
    userName: 'Vitaliy',
    userMessages: '4',
  });
  const user2 = createUser({
    userIndicator: 'online',
    userName: 'Tima',
    userMessages: '1',
  });
  const user3 = createUser({
    userIndicator: 'offline',
    userName: 'Nasty',
    userMessages: '11',
  });
  const user4 = createUser({
    userIndicator: 'online',
    userName: 'Roma',
    userMessages: '17',
  });
  const user5 = createUser({
    userIndicator: 'offline',
    userName: 'fegrfegge',
    userMessages: '',
  });

  usersContainer.append(user1, user2, user3, user4, user5);
  // временно

  return container;
}

export default createUsersListContainer;
