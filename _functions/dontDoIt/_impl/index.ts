import { DontDoItResponse } from '../_models/DontDoItResponse/DontDoItResponse';
import { SmsService } from '../../../_services/sms/smsService';

export class DontDoIt
{
  public async process(amount: number, merchant: any)
  {
    const dontDoItResponse = new DontDoItResponse();

    dontDoItResponse.amount = amount;
    dontDoItResponse.name = merchant.name;

    await new SmsService().sendText(dontDoItResponse.name, dontDoItResponse.amount);
  }
}
