import createElement from '../create/create_element';
import createDialogueForm from './dialogue_form';
import createMessagesContainer from './messages_container';

function createDialogueContainer(): HTMLElement {
  const container: HTMLElement = createElement({
    tag: 'div',
    classes: ['chat-container-dialogue-container'],
  });

  const dialogueUserContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['user-dialogue-user-info'],
    parent: container,
  });

  createElement({
    tag: 'h4',
    classes: ['user-info-user-name'],
    text: 'No contact selected',
    parent: dialogueUserContainer,
  });
  createElement({
    tag: 'div',
    classes: ['user-info-state-connect'],
    text: '',
    parent: dialogueUserContainer,
  });

  const messagesContainer: HTMLElement = createMessagesContainer();
  const usersDialogueForm: HTMLElement = createDialogueForm();

  container.append(messagesContainer, usersDialogueForm);

  return container;
}

export default createDialogueContainer;
