import createElement from '../functional/create/create_element'
//import createInput from '../functional/create/create_input'

function createHomePage(): HTMLElement {
  const homePageContainer = createElement({
    tag: 'div',
    classes: ['home-page__container'],
  })

  createElement({
    tag: 'h4',
    classes: ['home-page__user-name'],
    text: 'User name: Ihar',
    parent: homePageContainer,
  })

  const chatContainer = createElement({
    tag: 'div',
    classes: ['home-page__chat-container'],
    parent: homePageContainer,
  })

  createElement({
    tag: 'div',
    classes: ['chat-container__user-list'],
    parent: chatContainer,
  })
  createElement({
    tag: 'div',
    classes: ['chat-container__user-dialogue'],
    parent: chatContainer,
  })

  return homePageContainer
}

export default createHomePage
