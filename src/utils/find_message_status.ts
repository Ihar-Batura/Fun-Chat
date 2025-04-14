import { MessageStatus } from '../types/types';

function findMessageStatus(
  { isDelivered, isReaded, isEdited }: MessageStatus,
  isEdit: boolean
): string {
  let status: string = '';

  if (isEdit) {
    if (isEdited) {
      status = 'edited';
    }
  }
  if (!isEdit) {
    if (!isDelivered) {
      status = 'sent';
    } else if (isDelivered && !isReaded) {
      status = 'delivered';
    } else {
      status = 'readed';
    }
  }
  return status;
}

export default findMessageStatus;
