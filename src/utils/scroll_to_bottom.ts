function scrollToBottom(): void {
  const element: Element | null = document.querySelector('.user-dialogue-content-container');
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
}

export default scrollToBottom;
