import { FormData } from '../types/types';

function getLoginFormData(): FormData {
  const formData: FormData = { login: null, password: null };
  const elLogin: Element | null = document.querySelector('#login');
  const elPassword: Element | null = document.querySelector('#password');

  if (elLogin && elPassword) {
    if (elLogin instanceof HTMLInputElement && elPassword instanceof HTMLInputElement) {
      const login: string = elLogin.value;
      const password: string = elPassword.value;

      formData.login = login;
      formData.password = password;

      elLogin.value = '';
      elPassword.value = '';
    }
  }

  return formData;
}

export default getLoginFormData;
