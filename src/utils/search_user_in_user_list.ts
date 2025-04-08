import { searchValue } from '../constants/variables';

function searchUserInUserList(inputValue: string): void {
  searchValue.value = inputValue;
  const users: NodeListOf<Element> = document.querySelectorAll('.user');

  if (users.length > 0) {
    if (inputValue.length > 0) {
      users.forEach((user) => {
        const userName: string | null = user.children[1].textContent;
        if (!userName) {
          return;
        }
        if (userName.startsWith(inputValue)) {
          user.classList.remove('hide');
        } else {
          user.classList.add('hide');
        }
      });
    } else {
      users.forEach((user) => {
        user.classList.remove('hide');
      });
    }
  }
}

export default searchUserInUserList;
