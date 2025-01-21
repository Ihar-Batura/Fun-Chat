import createElement from '../functional/create/create_element'
import createInput from '../functional/create/create_input'
import createButton from '../functional/create/create_button'

function createDialogueForm(): HTMLElement {
  const dialogueForm = createElement({
    tag: 'form',
    classes: ['user-dialogue__form'],
  })

  createInput({
    classes: ['user-dialogue__form-input'],
    type: 'text',
    required: 'true',
    placeholder: 'Message...',
    minLength: '1',
    parent: dialogueForm,
  })

  createButton({
    classes: ['btn', 'user-dialogue__form-button'],
    text: '',
    parent: dialogueForm,
  })

  return dialogueForm
}

export default createDialogueForm
