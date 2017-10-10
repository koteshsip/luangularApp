export class Notification {

  constructor(
    public notifyType: string,
    public notifyCategory: string,
    public notifyCode: string,
    public notifyMessage: string,
    public notifyDate: Date
  ) {  }

}