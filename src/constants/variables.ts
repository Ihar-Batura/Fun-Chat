import {
  SocketState,
  User,
  SocketRequestID,
  SearchValue,
  SelectedUser,
  IsEditMessage,
  IsNeedToAddNewMessageLine,
} from '../types/types';

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
  allAuthenticatedUsers: '',
  allUnauthorizedUsers: '',
  messageHistoryWithUser: '',
  sendMessageToUser: '',
  deleteMessage: '',
  editMessageText: '',
};

export const searchValue: SearchValue = {
  value: '',
};

export const selectedUser: SelectedUser = {
  name: '',
  status: '',
};

export const isEditMessage: IsEditMessage = {
  id: '',
  value: false,
};

export const isNeedToAddNewMessageLine: IsNeedToAddNewMessageLine = {
  value: true,
};
