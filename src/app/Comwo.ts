import { v4 as uuid } from "uuid";
// method safely enables cross - origin communication between Window objects; e.g.,
// between a page and a pop - up that it spawned, or between a page and an iframe embedded within it

type CommandNames =
  | "sendTextMessage"
  | "sendAudioMessage"
  | "getActiveChat"
  | "getMe"
  | "sendImageOrVideoMessage"
  | "sendFilePdf"
  | "openChat"

type Command = {
  name: CommandNames;
  data: any;
};

type ClientRequest = {
  id: string;
  sendResponse: (status: "fail" | "ok", response: any) => void;
};

export class ComwoClient {
  private _origin: string = "my-app";
  private _requests: ClientRequest[] = [];
  private _eventHandlers: { [key: string]: ((data: any) => void)[] } = {};

  run() {
    const receiveMessage = (event: any) => {
      if (event.data.origin !== this._origin) return;

      const request = this._requests.find((r) => r.id === event.data.requestId);

      if (request) {
        request.sendResponse(event.data.status, event.data.response);
        this._requests = this._requests.filter((r) => r.id !== request.id);
        return;
      }

      if (event.data.eventName) {
        this.emit(event.data.eventName, event.data.eventData);
      }
    };

    window.addEventListener("message", receiveMessage, false);
  }

  async execute(command: Command) {
    return new Promise((resolve, reject) => {
      const requestId: string = uuid();

      window.parent.postMessage(
        {
          command: command.name,
          origin: this._origin,
          requestId: requestId,
          data: command.data,
        },
        "*",
      );

      this._requests.push({
        id: requestId,
        sendResponse: (status, response) => {
          if (status === "fail") return reject(response);
          return resolve(response);
        },
      });

      setTimeout(() => {
        const request = this._requests.find((r) => r.id === requestId);
        if (request) {
          this._requests = this._requests.filter((r) => r.id !== request.id);
          reject("timeout");
        }
      }, 15000);
    });
  }

  on(eventName: string, handler: (data: any) => void) {
    if (!this._eventHandlers[eventName]) this._eventHandlers[eventName] = [];
    this._eventHandlers[eventName].push(handler);
  }

  private emit(eventName: string, eventData: any) {
    if (!this._eventHandlers[eventName]) return;
    this._eventHandlers[eventName].forEach((h) => h(eventData));
  }
}
