import { FetchMessageHistoryWithUserResponse, Message } from '../types/types';
function countNotReadMessages(data: FetchMessageHistoryWithUserResponse): number {
  const userName: string = data.id;
  const arrMessages: Message[] = data.payload.messages;
  const arrFromUser: Message[] = arrMessages.filter((message) => message.from === userName);
  const arrNotReadMessages: Message[] = arrFromUser.filter(
    (message) => message.status.isReaded !== true
  );
  return arrNotReadMessages.length;
}

export default countNotReadMessages;
