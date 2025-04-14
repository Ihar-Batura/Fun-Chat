import createElement from '../create/create_element';
import createInput from '../create/create_input';
import createButton from '../create/create_button';
import sendMessageToUser from '../sockets/send_message_to_user';
import { isEditMessage } from '../constants/variables';
import editMessageText from '../sockets/edit_message_text';
import makeMessagesAsRead from '../utils/make_messages_as_read';

function createDialogueForm(): HTMLElement {
  const dialogueForm: HTMLElement = createElement({
    tag: 'form',
    classes: ['user-dialogue-form'],
  });

  dialogueForm.setAttribute('autocomplete', 'off');

  dialogueForm.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    if (!isEditMessage.value) {
      makeMessagesAsRead();
      sendMessageToUser();
    } else {
      editMessageText();
    }
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
