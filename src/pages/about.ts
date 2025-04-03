import clearBody from '../utils/clear_body';
import createHeader from '../ui/header';
import createMain from '../ui/main';
import createAbout from '../ui/about';
import createFooter from '../ui/footer';
import createElement from '../create/create_element';
import addClassToElement from '../utils/add_class_to_element';
import addRoutePath from '../routes/add_route_path';

function createPageAbout(): void {
  clearBody();

  const body: HTMLElement = document.body;

  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();
  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
    parent: main,
  });

  const about: HTMLElement = createAbout();
  mainWrapper.append(about);

  const footer: HTMLElement = createFooter();

  body.append(header, main, footer);

  addClassToElement('btn-about', 'active');
  addRoutePath('#/about');
}

export default createPageAbout;
