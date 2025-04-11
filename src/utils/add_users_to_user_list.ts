import { User } from '../types/types';
import { selectedUser } from '../constants/variables';
import createUser from '../components/user';
import selectContact from './select_contact';
import turnOnDialogueForm from './turn_on_dialogue_form';
import getMessageHistoryForCheckNotReadMessages from '../sockets/get_message_history_for_check_not_read_messages';
import searchUserInUserList from './search_user_in_user_list';

function addUsersToUserList(userArray: User[]): void {
  const userList: Element | null = document.querySelector('.user-list-users-container');
  if (userList && userArray.length > 0) {
    const sortUsers: User[] = userArray.sort((a, b) => a.login.localeCompare(b.login));

    sortUsers.forEach((el) => {
      const userName: string = el.login;
      const userIndicator: boolean | undefined = el.isLogined;
      if (userIndicator !== undefined) {
        const userStatus: string = userIndicator === true ? 'online' : 'offline';

        const user: HTMLElement = createUser({
          userIndicator: `${userStatus}`,
          userName: `${userName}`,
          userMessages: '',
        });

        user.addEventListener('click', () => {
          selectContact(userName, userIndicator);
          turnOnDialogueForm();
        });

        userList.append(user);
        getMessageHistoryForCheckNotReadMessages(userName);

        if (selectedUser.name === userName) {
          selectContact(userName, userIndicator);
          turnOnDialogueForm();
        }
      }
    });
  }
  searchUserInUserList();
}

export default addUsersToUserList;
