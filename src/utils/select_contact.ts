import { selectedUser } from '../constants/variables';
import getMessageHistoryWithUser from '../sockets/get_message_history_with_user';

function selectContact(contactName: string, userIndicator: boolean): void {
  const userName: Element | null = document.querySelector('.user-info-user-name');
  const userConnectInfo: Element | null = document.querySelector('.user-info-state-connect');

  if (userName && userConnectInfo) {
    const userStatus: string = userIndicator === true ? 'online' : 'offline';

    userName.textContent = contactName;
    userConnectInfo.textContent = userStatus;
    selectedUser.name = contactName;

    userConnectInfo.classList.remove('online');
    userConnectInfo.classList.remove('offline');
    userConnectInfo.classList.add(`${userStatus}`);

    getMessageHistoryWithUser();
  }
}

export default selectContact;
