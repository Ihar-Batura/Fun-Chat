import createPopupNoConnectServer from '../popups/no_connect_server';

function showPopupNoConnect(): void {
  const body: HTMLElement = document.body;
  const bodyChildren: NodeListOf<ChildNode> = body.childNodes;
  let isShow: boolean = false;

  bodyChildren.forEach((child) => {
    if (child instanceof HTMLElement) {
      if (child.classList.value.includes('popup-connect')) {
        isShow = true;
      }
    }
  });

  if (!isShow) {
    const popup: HTMLElement = createPopupNoConnectServer();
    body.append(popup);
  }
}

export default showPopupNoConnect;
