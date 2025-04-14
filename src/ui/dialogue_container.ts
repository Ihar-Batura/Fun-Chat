import createElement from '../create/create_element';
import createDialogueForm from './dialogue_form';
import makeMessagesAsRead from '../utils/make_messages_as_read';

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

  const messagesContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['user-dialogue-content-container'],
    text: 'Select contact to start conversation',
    parent: container,
  });

  messagesContainer.addEventListener('click', (event: MouseEvent) => {
    const target: EventTarget | null = event.target;
    if (target instanceof HTMLElement) {
      if (!target.classList.contains('btn')) {
        makeMessagesAsRead();
      }
    }
  });

  const usersDialogueForm: HTMLElement = createDialogueForm();

  container.append(usersDialogueForm);

  return container;
}

export default createDialogueContainer;
