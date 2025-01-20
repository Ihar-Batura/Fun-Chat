import createElement from '../functional/create/create_element'
import { IUserInfo } from '../types/types'

function createUser({
  userIndicator,
  userName,
  userMessages,
}: IUserInfo): HTMLElement {
  const user = createElement({
    tag: 'div',
    classes: ['user', 'users-container__user-container'],
  })

  createElement({
    tag: 'div',
    classes: ['user-indicator', `'user-${userIndicator}'`],
    parent: user,
  })
  createElement({
    tag: 'div',
    classes: ['user-name'],
    text: `${userName}`,
    parent: user,
  })
  createElement({
    tag: 'div',
    classes: ['user-messages'],
    text: `${userMessages}`,
    parent: user,
  })

  return user
}

export default createUser
