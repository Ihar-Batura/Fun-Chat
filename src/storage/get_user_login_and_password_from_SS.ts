import { User } from '../types/types';

function getUserLoginAndPasswordFromSessionStorage(): User | null {
  const data: string | null = sessionStorage.getItem('Fun-Chat-IB');
  if (data !== null) {
    const userData: User = JSON.parse(data);
    return userData;
  }

  return null;
}

export default getUserLoginAndPasswordFromSessionStorage;
