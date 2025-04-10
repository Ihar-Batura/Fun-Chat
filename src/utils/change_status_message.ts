function changeStatusMessage(id: string, newStatus: string): void {
  const messageStatusElement: HTMLElement | null = document.getElementById(`${id + 'status'}`);
  if (messageStatusElement) {
    if (newStatus === 'deliver') {
      messageStatusElement.classList.remove('sent');
      messageStatusElement.classList.add('delivered');
    }
    if (newStatus === 'read') {
      messageStatusElement.classList.remove('sent');
      messageStatusElement.classList.remove('delivered');
      messageStatusElement.classList.add('readed');
    }
  }
}

export default changeStatusMessage;
