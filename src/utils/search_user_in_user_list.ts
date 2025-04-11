function searchUserInUserList(): void {
  const searchInput: Element | null = document.querySelector('.users-list-search-input');
  const users: NodeListOf<Element> = document.querySelectorAll('.user');

  if (searchInput && searchInput instanceof HTMLInputElement) {
    const inputValue: string = searchInput.value;

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
}

export default searchUserInUserList;
