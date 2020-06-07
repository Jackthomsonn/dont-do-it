import { NowResponse } from '@now/node';

export class OkObjectResult<T> {
  public body: T;

  constructor(body: T, res: NowResponse)
  {
    this.body = body;

    res.status(200).json(this);
  }
}
