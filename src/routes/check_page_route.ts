import changePage from './change_page';

function checkPageRoute(): void {
  window.addEventListener('load', () => {
    changePage();
  });

  window.addEventListener('hashchange', () => {
    changePage();
  });
}

export default checkPageRoute;
