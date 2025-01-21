import createElement from '../functional/create/create_element'
import createDialogueForm from './dialogue_form'

function createDialogueContainer(): HTMLElement {
  const dialogueContainer = createElement({
    tag: 'div',
    classes: ['chat-container__user-dialogue'],
  })

  const dialogueUserContainer = createElement({
    tag: 'div',
    classes: ['user-dialogue__user-info'],
    parent: dialogueContainer,
  })

  createElement({
    tag: 'h4',
    classes: ['user-info__user-name'],
    text: 'Anna',
    parent: dialogueUserContainer,
  })
  createElement({
    tag: 'div',
    classes: ['user-info__state-connect', 'user-offline'],
    text: '(online)',
    parent: dialogueUserContainer,
  })

  createElement({
    tag: 'div',
    classes: ['user-dialogue__content-container'],
    parent: dialogueContainer,
  })

  const usersDialogueForm = createDialogueForm()
  dialogueContainer.append(usersDialogueForm)

  return dialogueContainer
}

export default createDialogueContainer
