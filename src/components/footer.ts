import createElement from '../functional/create/create_element'
import createLink from '../functional/create/create_link'

function createFooter(): HTMLElement {
  const footer = createElement({ tag: 'footer', classes: ['footer'] })
  const wrapper = createElement({
    tag: 'div',
    classes: ['wrapper', 'footer-wrapper'],
    parent: footer,
  })

  createElement({
    tag: 'p',
    classes: ['footer-data'],
    text: '© 2025',
    parent: wrapper,
  })

  createLink({
    classes: ['footer-link'],
    text: 'Ihar Batura',
    href: 'https://github.com/Ihar-Batura',
    target: '_blank',
    parent: wrapper,
  })

  return footer
}

export default createFooter
