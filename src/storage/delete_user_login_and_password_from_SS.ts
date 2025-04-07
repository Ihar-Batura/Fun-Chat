function deleteUserLoginAndPasswordFromSessionStorage(): void {
  sessionStorage.removeItem('Fun-Chat-IB');
}

export default deleteUserLoginAndPasswordFromSessionStorage;
