export class AppService {

  messages: Array<string> = [];

  addMessage(message: string) {
    this.messages.push(message);
  }
}
