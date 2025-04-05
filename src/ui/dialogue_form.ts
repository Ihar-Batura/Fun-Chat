import createElement from '../create/create_element';
import createInput from '../create/create_input';
import createButton from '../create/create_button';

function createDialogueForm(): HTMLElement {
  const dialogueForm: HTMLElement = createElement({
    tag: 'form',
    classes: ['user-dialogue-form'],
  });

  createInput({
    classes: ['user-dialogue-form-input'],
    type: 'text',
    required: 'true',
    placeholder: 'Message...',
    minLength: '1',
    parent: dialogueForm,
  });

  createButton({
    classes: ['btn', 'user-dialogue-form-button'],
    text: '',
    parent: dialogueForm,
  });

  return dialogueForm;
}

export default createDialogueForm;
