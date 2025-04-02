import createElement from '../create/create_element';

function createMain(): HTMLElement {
  const main: HTMLElement = createElement({ tag: 'main', classes: ['main'] });

  return main;
}

export default createMain;
