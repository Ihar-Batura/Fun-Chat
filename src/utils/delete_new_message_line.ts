function deleteNewMessageLine(): void {
  const lineElement: Element | null = document.querySelector('.dialogue-line-container');
  if (lineElement) {
    const messagesContainer: Element | null = document.querySelector(
      '.user-dialogue-content-container'
    );
    if (messagesContainer) {
      messagesContainer.removeChild(lineElement);
    }
  }
}

export default deleteNewMessageLine;
