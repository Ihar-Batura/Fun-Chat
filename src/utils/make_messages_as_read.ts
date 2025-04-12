import deleteNewMessageLine from './delete_new_message_line';
import findAllNotReadMessages from './find_all_not_read_messages';
import readMessage from '../sockets/read_message';
import { isNeedToAddNewMessageLine } from '../constants/variables';

function makeMessagesAsRead(): void {
  deleteNewMessageLine();
  isNeedToAddNewMessageLine.value = false;

  const listOfMessagesId: string[] | undefined = findAllNotReadMessages();
  if (listOfMessagesId) {
    listOfMessagesId.forEach((id) => {
      readMessage(id);
    });
  }
}

export default makeMessagesAsRead;
