import createElement from '../create/create_element';
import createDialogueForm from './dialogue_form';

function createDialogueContainer(): HTMLElement {
  const container: HTMLElement = createElement({
    tag: 'div',
    classes: ['chat-container-dialogue-container'],
  });

  const dialogueUserContainer = createElement({
    tag: 'div',
    classes: ['user-dialogue-user-info'],
    parent: container,
  });

  createElement({
    tag: 'h4',
    classes: ['user-info-user-name'],
    text: 'Anna',
    parent: dialogueUserContainer,
  });
  createElement({
    tag: 'div',
    classes: ['user-info-state-connect', 'user-offline'],
    text: '(online)',
    parent: dialogueUserContainer,
  });

  createElement({
    tag: 'div',
    classes: ['user-dialogue-content-container'],
    parent: container,
  });

  const usersDialogueForm = createDialogueForm();
  container.append(usersDialogueForm);

  return container;
}

export default createDialogueContainer;
