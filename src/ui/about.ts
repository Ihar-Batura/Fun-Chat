import createElement from '../create/create_element';
import createButton from '../create/create_button';

function createAbout(): HTMLElement {
  const aboutContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['about-container'],
  });

  createElement({
    tag: 'h2',
    classes: ['about-container-title'],
    text: 'Welcome',
    parent: aboutContainer,
  });
  createElement({
    tag: 'h3',
    classes: ['about-container-title', 'about-container-title-h3'],
    text: 'My dear friend',
    parent: aboutContainer,
  });

  createElement({
    tag: 'p',
    classes: ['about-container-description'],
    text: 'This project was created for educational purposes.',
    parent: aboutContainer,
  });

  createElement({
    tag: 'p',
    classes: ['about-container-description'],
    text: 'The application is a client for a chat service that operates over WebSocket.',
    parent: aboutContainer,
  });

  createElement({
    tag: 'p',
    classes: ['about-container-description'],
    text: 'The client application enables users to send messages, view chat history, and also allows senders to delete and edit messages.',
    parent: aboutContainer,
  });

  createElement({
    tag: 'p',
    classes: ['about-container-description'],
    text: 'Please note, chat also requires a separate local server to be running for its functionality. This server handles chat features, message storage, and user management.',
    parent: aboutContainer,
  });

  createElement({
    tag: 'p',
    classes: ['about-container-description'],
    text: `Now you can fun chatting with your friends and don't think that someone else read your messages.`,
    parent: aboutContainer,
  });

  createButton({
    classes: ['btn', 'about-container-btn-return'],
    text: 'Return Back',
    parent: aboutContainer,
  });

  return aboutContainer;
}

export default createAbout;
