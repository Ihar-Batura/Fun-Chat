import { selectedUser } from '../constants/variables';

function clearUserNotReadMessagesValue(): void {
  const userName: string = selectedUser.name;
  const user: HTMLElement | null = document.getElementById(`${userName}`);
  if (user) {
    user.textContent = '';
  }
}

export default clearUserNotReadMessagesValue;
