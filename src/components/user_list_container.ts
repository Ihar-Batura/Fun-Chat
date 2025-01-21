import createElement from '../functional/create/create_element'
import createInput from '../functional/create/create_input'
import createUser from './user'

function createUserListContainer(): HTMLElement {
  const userListContainer = createElement({
    tag: 'div',
    classes: ['chat-container__user-list'],
  })

  createInput({
    classes: ['user-list__search-input'],
    type: 'text',
    placeholder: 'Search...',
    parent: userListContainer,
  })

  const usersContainer = createElement({
    tag: 'div',
    classes: ['user-list__users-container'],
    parent: userListContainer,
  })

  // временно
  const user1 = createUser({
    userIndicator: 'online',
    userName: 'Vitaliy',
    userMessages: '4',
  })
  const user2 = createUser({
    userIndicator: 'online',
    userName: 'Tima',
    userMessages: '1',
  })
  const user3 = createUser({
    userIndicator: 'offline',
    userName: 'Nasty',
    userMessages: '11',
  })
  const user4 = createUser({
    userIndicator: 'online',
    userName: 'Roma',
    userMessages: '17',
  })
  const user5 = createUser({
    userIndicator: 'offline',
    userName: 'fegrfegge',
    userMessages: '',
  })

  usersContainer.append(user1, user2, user3, user4, user5)
  // временно

  return userListContainer
}

export default createUserListContainer
