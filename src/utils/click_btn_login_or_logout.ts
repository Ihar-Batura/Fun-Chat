import createPageLogin from '../pages/login';

function clickBtnLoginOrLogout(): void {
  const btn: Element | null = document.querySelector('.btn-login-logout');

  if (btn !== null) {
    const btnText: string | null = btn.textContent;

    if (btnText === 'LogIn') {
      createPageLogin();
    } else {
      console.log('Make LogOut');
    }
  }
}

export default clickBtnLoginOrLogout;
