import createElement from '../create/create_element';
import createUsersListContainer from './users_list_container';
import createDialogueContainer from './dialogue_container';

function createChatContainer(): HTMLElement {
  const container: HTMLElement = createElement({
    tag: 'div',
    classes: ['main-page-chat-container'],
  });

  const userListContainer: HTMLElement = createUsersListContainer();
  const dialogueContainer: HTMLElement = createDialogueContainer();

  container.append(userListContainer, dialogueContainer);

  return container;
}

export default createChatContainer;
