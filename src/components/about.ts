import createElement from '../functional/create/create_element'

function createAbout(): HTMLElement {
  const aboutContainer = createElement({
    tag: 'div',
    classes: ['about-container'],
  })

  createElement({
    tag: 'h2',
    classes: ['about-container__title'],
    text: 'Welcome',
    parent: aboutContainer,
  })
  createElement({
    tag: 'h3',
    classes: ['about-container__title', 'about-container__title-h3'],
    text: 'My dear friend',
    parent: aboutContainer,
  })

  createElement({
    tag: 'p',
    classes: ['about-container__description'],
    text: 'This project was created for educational purposes.',
    parent: aboutContainer,
  })

  createElement({
    tag: 'p',
    classes: ['about-container__description'],
    text: 'The application is a client for a chat service that operates over WebSocket. The client application enables users to send messages, view chat history, and also allows senders to delete and edit messages.',
    parent: aboutContainer,
  })

  createElement({
    tag: 'p',
    classes: ['about-container__description'],
    text: 'Please note, chat also requires a separate local server to be running for its functionality. This server handles chat features, message storage, and user management.',
    parent: aboutContainer,
  })

  createElement({
    tag: 'p',
    classes: ['about-container__description'],
    text: `Now you can fun chatting with your friends and don't think that someone else read your messages.`,
    parent: aboutContainer,
  })

  return aboutContainer
}

export default createAbout
