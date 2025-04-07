import { User } from '../types/types';

function saveUserLoginAndPasswordToSessionStorage({ login, password }: User): void {
  const data: User = { login: login, password: password };

  sessionStorage.setItem('Fun-Chat-IB', JSON.stringify(data));
}

export default saveUserLoginAndPasswordToSessionStorage;
