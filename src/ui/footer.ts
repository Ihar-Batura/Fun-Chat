import createElement from '../create/create_element';
import createLink from '../create/create_link';

function createFooter(): HTMLElement {
  const footer: HTMLElement = createElement({ tag: 'footer', classes: ['footer'] });
  const wrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'footer-wrapper'],
    parent: footer,
  });

  createElement({
    tag: 'p',
    classes: ['footer-date'],
    text: '© 2025',
    parent: wrapper,
  });

  createLink({
    classes: ['footer-link'],
    text: 'RSSchool',
    href: 'https://rs.school/courses',
    target: '_blank',
    parent: wrapper,
  });

  createLink({
    classes: ['footer-link'],
    text: 'Ihar Batura',
    href: 'https://github.com/Ihar-Batura',
    target: '_blank',
    parent: wrapper,
  });

  return footer;
}

export default createFooter;
