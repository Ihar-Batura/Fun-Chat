function deletePopupNoConnect(): void {
  const body: HTMLElement = document.body;
  const bodyChildren: NodeListOf<ChildNode> = body.childNodes;
  let popup: HTMLElement | null = null;

  bodyChildren.forEach((child) => {
    if (child instanceof HTMLElement) {
      if (child.classList.value.includes('popup-connect')) {
        popup = child;
      }
    }
  });

  if (popup !== null) {
    body.removeChild(popup);
  }
}

export default deletePopupNoConnect;
