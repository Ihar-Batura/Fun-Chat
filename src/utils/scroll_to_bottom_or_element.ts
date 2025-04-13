function scrollToBottomOrElement(): void {
  const container: Element | null = document.querySelector('.user-dialogue-content-container');
  const target: Element | null = document.querySelector('.dialogue-line-container');

  if (container && target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

export default scrollToBottomOrElement;
