import showPopupNoConnect from '../utils/show_popup_no_connect';
import deletePopupNoConnect from '../utils/delete_popup_no_connect';
import { socketState } from '../constants/variables';

function startWebSocket(): void {
  const port: string = '4000';
  const socket: WebSocket = new WebSocket(`ws://localhost:${port}`);

  socket.addEventListener('open', () => {
    console.log('WebSocket open!');
    deletePopupNoConnect();
    socketState.isSocketOpen = true;
    socketState.socket = socket;
  });

  // socket.addEventListener('error', (event: Event) => {
  //   console.log('There was an error connecting to the server:', event);
  // });

  socket.addEventListener('close', () => {
    console.log('The connection to the server was closed:');
    console.log('Попытка переподключения...');
    showPopupNoConnect();
    socketState.isSocketOpen = false;
    socketState.socket = null;

    setTimeout(startWebSocket, 1000);
  });
}

export default startWebSocket;
