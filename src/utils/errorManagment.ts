import toaster from 'react-hot-toast';
import { ErrorMessages } from './error';
import { HandleLogOut } from './axiosUtils';
export class ClientError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default function ErrorHandler(error: unknown) {
  if (error instanceof Error) {
    if (error.message === ErrorMessages.INVALID_TOKEN) {
      return HandleLogOut();
    }
    toaster.error(error.message);
  }
}
