import { Statuses } from './../../_enums/statuses/statuses';
import { NowResponse } from '@now/node';
export class ErrorObjectResult
{
  public statusCode = 500;
  public errorCode: Statuses = Statuses.INTERNAL_SERVER_ERROR;
  public userMessage: string = 'Internal server error';

  constructor(options, res: NowResponse)
  {
    this.statusCode = options.statusCode ? options.statusCode : this.statusCode;
    this.errorCode = options.errorCode ? options.errorCode : this.errorCode;
    this.userMessage = options.userMessage ? options.userMessage : this.userMessage;

    res.status(this.statusCode).json(this);
  }
}
