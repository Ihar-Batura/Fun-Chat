import { MessageStatus } from '../types/types';

function findMessageStatus({ isDelivered, isReaded, isEdited }: MessageStatus): string {
  if (!isDelivered) {
    return 'sent';
  } else if (isDelivered && !isReaded) {
    return 'delivered';
  } else {
    return 'readed';
  }
}

export default findMessageStatus;
