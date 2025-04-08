import showPopupNoConnect from '../utils/show_popup_no_connect';
import deletePopupNoConnect from '../utils/delete_popup_no_connect';
import { socketState, user } from '../constants/variables';
import sendLoginDataToServer from './send_login_data';
import processServerResponse from './process_server_response';

function startWebSocket(): void {
  const port: string = '4000';
  const socket: WebSocket = new WebSocket(`ws://localhost:${port}`);

  socket.addEventListener('open', () => {
    deletePopupNoConnect();
    socketState.isSocketOpen = true;
    socketState.socket = socket;
    socket.addEventListener('message', processServerResponse);
    if (user.isLogined) {
      sendLoginDataToServer();
    }
  });

  socket.addEventListener('close', () => {
    socket.removeEventListener('message', processServerResponse);
    showPopupNoConnect();
    socketState.isSocketOpen = false;
    socketState.socket = null;

    setTimeout(startWebSocket, 1000);
  });
}

export default startWebSocket;
