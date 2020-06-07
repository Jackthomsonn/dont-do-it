import { DontDoIt } from './_impl/index';
import { ErrorObjectResult } from '../../_models/errorObjectResult/errorObjectResult';
import { OkObjectResult } from '../../_models/okObjectResult/okObjectResult';
import { NowRequest, NowResponse } from '@now/node';

export default async (req: NowRequest, res: NowResponse) =>
{
  try
  {
    const { merchant, amount } = req.body.data;

    const dontDoIt = new DontDoIt();

    await dontDoIt.process(amount, merchant);

    return new OkObjectResult({ success: true }, res);
  }
  catch (error)
  {
    return new ErrorObjectResult(error, res);
  }
}
