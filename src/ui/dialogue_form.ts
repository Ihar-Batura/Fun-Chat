import createElement from '../create/create_element';
import createInput from '../create/create_input';
import createButton from '../create/create_button';
import sendMessageToUser from '../sockets/send_message_to_user';

function createDialogueForm(): HTMLElement {
  const dialogueForm: HTMLElement = createElement({
    tag: 'form',
    classes: ['user-dialogue-form'],
  });

  dialogueForm.setAttribute('autocomplete', 'off');
  dialogueForm.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    sendMessageToUser();
  });

  createInput({
    classes: ['user-dialogue-form-input'],
    type: 'text',
    required: 'true',
    placeholder: 'Message...',
    minLength: '1',
    disabled: true,
    parent: dialogueForm,
  });

  createButton({
    classes: ['btn', 'user-dialogue-form-button'],
    text: '',
    disabled: true,
    parent: dialogueForm,
  });

  return dialogueForm;
}

export default createDialogueForm;
