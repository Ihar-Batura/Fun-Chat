import createElement from '../create/create_element';

function addTextToAbout(parent: HTMLElement): void {
  createElement({
    tag: 'p',
    classes: ['about-container-description'],
    text: 'This project was created for educational purposes. The application is a client for a chat service that operates over WebSocket.',
    parent: parent,
  });

  createElement({
    tag: 'p',
    classes: ['about-container-description'],
    text: 'The client application enables users to send messages, view chat history, and also allows senders to delete and edit messages.',
    parent: parent,
  });

  createElement({
    tag: 'p',
    classes: ['about-container-description'],
    text: 'Please note, chat also requires a separate local server to be running for its functionality.',
    parent: parent,
  });
}

export default addTextToAbout;
