import { User } from '../types/types';
import createUser from '../components/user';

function addUsersToUserList(userArray: User[]): void {
  const userList: Element | null = document.querySelector('.user-list-users-container');
  if (userList && userArray.length > 0) {
    userArray.forEach((el) => {
      const userName: string = el.login;
      const userIndicator: boolean | undefined = el.isLogined;
      if (userIndicator !== undefined) {
        const user = createUser({
          userIndicator: `${userIndicator === true ? 'online' : 'offline'}`,
          userName: `${userName}`,
          userMessages: '',
        });

        userList.append(user);
      }
    });
  }
}

export default addUsersToUserList;
