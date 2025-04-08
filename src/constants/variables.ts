import { SocketState, User, SocketRequestID } from '../types/types';

export const socketState: SocketState = {
  isSocketOpen: false,
  socket: null,
};

export const user: User = {
  login: '',
  password: undefined,
  isLogined: false,
};

export const socketRequestID: SocketRequestID = {
  userAuthentication: '',
  userLogout: '',
};
