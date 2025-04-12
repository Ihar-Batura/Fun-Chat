function findAllNotReadMessages(): string[] | undefined {
  const listOfMessages: NodeListOf<Element> = document.querySelectorAll('.contact-message');
  if (listOfMessages.length < 1) {
    return;
  }
  const arrId: string[] = [];

  listOfMessages.forEach((el) => {
    const messageId: string = el.id;
    arrId.push(messageId);
  });

  return arrId;
}

export default findAllNotReadMessages;
