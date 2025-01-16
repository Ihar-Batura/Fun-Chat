import createElement from '../functional/create/create_element'

function createLogo(): HTMLElement {
  const logoContainer = createElement({
    tag: 'div',
    classes: ['logo-container'],
  })
  createElement({
    tag: 'div',
    classes: ['logo-container__img'],
    parent: logoContainer,
  })
  createElement({
    tag: 'h1',
    classes: ['logo-container__text'],
    text: 'Fun Chat',
    parent: logoContainer,
  })

  return logoContainer
}

export default createLogo
