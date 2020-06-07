const textmagicClient = require('textmagic-client');

const client = textmagicClient.ApiClient.instance;
const auth = client.authentications[ 'BasicAuth' ];

auth.username = 'jackthomson';
auth.password = process.env.TEXT_MAGIC_PASSWORD;

const api = new textmagicClient.TextMagicApi();


export class SmsService
{
  public sendText(name: string, amount: number)
  {
    return api.sendMessage({ text: this.constructMessage(name, amount), phones: process.env.PHONE_NUMBER });
  }

  private constructMessage(name: string, amount: number)
  {
    return `
    Dont do it! Dont eat that ${ name } otherwise you will look like this (https://cutt.ly/htVS3V4) again! Plus, that is £${ Math.abs(amount / 100).toFixed(2) } you can save!
    `;
  }
}