import { UserInfo } from '../types/types';
import createElement from '../create/create_element';

function createUser({ userIndicator, userName, userMessages }: UserInfo): HTMLElement {
  const user: HTMLElement = createElement({
    tag: 'div',
    classes: ['user', 'users-container-user-container'],
  });

  createElement({
    tag: 'div',
    classes: ['user-indicator', `${userIndicator}`],
    parent: user,
  });
  createElement({
    tag: 'div',
    classes: ['user-name'],
    text: `${userName}`,
    parent: user,
  });
  createElement({
    tag: 'div',
    classes: ['user-messages-info'],
    id: `${userName}`,
    text: `${userMessages}`,
    parent: user,
  });

  return user;
}

export default createUser;
