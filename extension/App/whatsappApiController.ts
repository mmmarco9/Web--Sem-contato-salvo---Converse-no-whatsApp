type RequestHander = { data: any }
type ResponseHandler = { send: (status: 'ok' | 'fail', result: any) => void }


type Handler = {
    name: string
    execute: (request: RequestHander, response: ResponseHandler) => any
}

export class WhatsAppAPIController {
    private _origin: string = 'my-app'
    private _handlers: Handler[] = []

    addHandler(handler: Handler) {
        this._handlers.push(handler)
    }

    run() {
        window.addEventListener("message", (ev) => this.receiveMessage(ev), false);
    }

    private receiveMessage({ data, source }: { data: any, source: any }) {

        if (data.origin !== this._origin) return;
        if (!data.command) return


        const handler = this._handlers.find(h => h.name === data.command)
        if (!handler) return

        const response: ResponseHandler = {
            send: (status, responseData) => {
                source.postMessage(
                    {
                        response: responseData,
                        origin: data.origin,
                        command: data.command,
                        requestId: data.requestId,
                        status: status
                    },
                    "*"
                );
            }
        }

        const request: RequestHander = {
            data: data.data
        }

        handler.execute(request, response)

    }

}