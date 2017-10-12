export class Notification {

  constructor(
    public notifyType: string,
    public notifyDate: Date,
    public notifyCategory: string,
    public notifyCode: string,
    public notifyMessage: string
  ) {  }

}