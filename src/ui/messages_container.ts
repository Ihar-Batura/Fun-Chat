import createElement from '../create/create_element';
import makeMessagesAsRead from '../utils/make_messages_as_read';

let isMouseOnMessageContainer: boolean = false;

function createMessagesContainer(): HTMLElement {
  const messagesContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['user-dialogue-content-container'],
    text: 'Select contact to start conversation',
  });

  messagesContainer.addEventListener('click', (event: MouseEvent) => {
    const target: EventTarget | null = event.target;
    if (target instanceof HTMLElement) {
      if (!target.classList.contains('btn')) {
        makeMessagesAsRead();
      }
    }
  });

  messagesContainer.addEventListener('mouseover', () => {
    isMouseOnMessageContainer = true;
  });
  messagesContainer.addEventListener('mouseout', () => {
    isMouseOnMessageContainer = false;
  });

  messagesContainer.addEventListener('scroll', () => {
    if (isMouseOnMessageContainer) {
      makeMessagesAsRead();
    }
  });

  messagesContainer.addEventListener('click', (event: MouseEvent) => {
    const target: EventTarget | null = event.target;
    if (target instanceof HTMLElement) {
      if (!target.classList.contains('btn')) {
        makeMessagesAsRead();
      }
    }
  });

  return messagesContainer;
}

export default createMessagesContainer;
