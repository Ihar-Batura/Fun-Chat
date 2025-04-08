export interface CreateElement {
  tag?: string;
  classes?: string[];
  id?: string;
  text?: string;
  parent?: HTMLElement;
}

export interface CreateInput {
  type: string;
  classes?: string[];
  id?: string;
  value?: string;
  title?: string;
  required?: string;
  placeholder?: string;
  minLength?: string;
  min?: string;
  pattern?: string;
  addRules?: string;
  onInput?: () => void;
  parent?: HTMLElement;
}

export interface CreateButton extends CreateElement {
  disabled?: boolean;
  name?: string;
  onClick?: () => void;
}

export interface CreateLink {
  href: string;
  classes?: string[];
  id?: string;
  text?: string;
  target?: string;
  parent?: HTMLElement;
}

export interface CreateDialog {
  classes?: string[];
  id?: string;
  parent?: HTMLElement;
}

export interface FormLineElement {
  parent: HTMLElement;
  labelText: string;
  inputId: string;
  inputType: string;
  inputTitle: string;
  inputMinLength: string;
  pattern: string;
  inputRules: string;
  spanId: string;
  spanText: string;
}

export interface SocketState {
  isSocketOpen: boolean;
  socket: null | WebSocket;
}

export interface FormData {
  login: string | null;
  password: string | null;
}

export interface User {
  login: string;
  password?: string;
  isLogined?: boolean;
}

export interface UserInfo {
  userIndicator: string;
  userName: string;
  userMessages: string;
}

export interface SocketRequestID {
  userAuthentication: string;
  userLogout: string;
}

export interface BaseResponse {
  id: string;
  type:
    | 'USER_LOGIN'
    | 'USER_LOGOUT'
    | 'USER_ACTIVE'
    | 'USER_INACTIVE'
    | 'MSG_SEND'
    | 'MSG_FROM_USER'
    | 'MSG_READ'
    | 'MSG_DELETE'
    | 'MSG_EDIT';
}

export interface UserAuthentication extends BaseResponse {
  payload: {
    user: User;
  };
}

export interface ServerResponseError {
  id: string;
  type: 'ERROR';
  payload: {
    error: string;
  };
}

export interface ThirdPartyUserAuthentication {
  id: null;
  type: 'USER_EXTERNAL_LOGIN' | 'USER_EXTERNAL_LOGOUT';
  payload: {
    user: User;
  };
}

export interface GetAllUsersRequest extends BaseResponse {
  payload: null;
}

export interface GetAllUsersResponse extends BaseResponse {
  payload: {
    users: [];
  };
}

export interface SendMessageToUserRequest extends BaseResponse {
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}

export interface SendMessageToUserResponse extends BaseResponse {
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
}

export interface ReceiveMessageFromUser {
  id: null;
  type: 'MSG_SEND';
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
}

export interface FetchMessageHistoryWithUserRequest extends BaseResponse {
  payload: {
    user: User;
  };
}

export interface FetchMessageHistoryWithUserResponse extends BaseResponse {
  payload: {
    messages: [];
  };
}

export interface MessageReadStatusChangeRequest extends BaseResponse {
  payload: {
    message: {
      id: string;
    };
  };
}

export interface MessageReadStatusChangeResponse extends BaseResponse {
  payload: {
    message: {
      id: string;
      status: {
        isReaded: boolean;
      };
    };
  };
}

export interface MessageDeletionRequest extends BaseResponse {
  payload: {
    message: {
      id: string;
    };
  };
}

export interface MessageDeletionResponse extends BaseResponse {
  payload: {
    message: {
      id: string;
      status: {
        isDeleted: boolean;
      };
    };
  };
}

export interface MessageTextEditingRequest extends BaseResponse {
  payload: {
    message: {
      id: string;
      text: string;
    };
  };
}

export interface MessageTextEditingResponse extends BaseResponse {
  payload: {
    message: {
      id: string;
      text: string;
      status: {
        isEdited: boolean;
      };
    };
  };
}

export interface BaseServerNotification {
  id: null;
  type: 'MSG_EDIT' | 'MSG_DELIVER' | 'MSG_READ' | 'MSG_DELETE';
}

export interface NotificationMessageTextEdit extends BaseServerNotification {
  payload: {
    message: {
      id: string;
      text: string;
      status: {
        isEdited: boolean;
      };
    };
  };
}

export interface NotificationMessageDeliveryStatusChange extends BaseServerNotification {
  payload: {
    message: {
      id: string;
      status: {
        isDelivered: boolean;
      };
    };
  };
}

export interface NotificationMessageReadStatusChange extends BaseServerNotification {
  payload: {
    message: {
      id: string;
      status: {
        isReaded: boolean;
      };
    };
  };
}
export interface NotificationMessageDeletion extends BaseServerNotification {
  payload: {
    message: {
      id: string;
      status: {
        isDeleted: boolean;
      };
    };
  };
}
