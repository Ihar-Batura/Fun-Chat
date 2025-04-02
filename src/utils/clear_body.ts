function clearBody(): void {
  const body: HTMLElement = document.body;

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}

export default clearBody;
