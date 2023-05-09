import { ComwoClient } from "../app/Comwo";
import { GetActiveChatResponse, IWapi } from "../app/WapiService";

export class Wapi implements IWapi {
  constructor(private wapiClient: ComwoClient) {}

  async getActiveChat(): Promise<GetActiveChatResponse> {
    const res: any = await this.wapiClient.execute({
      name: "getActiveChat",
      data: {},
    }); // TODO:
    return { name: res.name, id: res.id, isGroup: res.isGroup };
  }
  async sendTextMessage(
    to: string,
    text: string,
  ): Promise<{ status: "ok" | "fail" }> {
    const res = await this.wapiClient.execute({
      name: "sendTextMessage",
      data: { text, to },
    }); // TODO:
    return res as any;
  }
  async sendImageMessage(
    to: string,
    base64Image: string,
    caption?: string,
  ): Promise<{ status: "ok" | "fail" }> {
    const res = await this.wapiClient.execute({
      name: "sendImageOrVideoMessage",
      data: { data: base64Image, to, caption },
    });
    return res as any;
  }
  async sendPdfMessage(
    to: string,
    base64Pdf: string,
  ): Promise<{ status: "ok" | "fail" }> {
    const res = await this.wapiClient.execute({
      name: "sendFilePdf",
      data: { data: base64Pdf, to },
    });
    return res as any;
  }
  async sendAudioMessage(
    to: string,
    base64Audio: string,
  ): Promise<{ status: "ok" | "fail" }> {
    const res = await this.wapiClient.execute({
      name: "sendAudioMessage",
      data: { data: base64Audio, to },
    });
    return res as any;
  }

  async openDirectChat(
    phone: string,
  ): Promise<{ status: "ok" | "fail" }> {
    const res = await this.wapiClient.execute({
      name: "openChat",
      data: { phone },
    });
    return res as any;
  }


  async getMe(): Promise<{ phone: string; name: string; avatarUrl: string }> {
    const res: any = await this.wapiClient.execute({ name: "getMe", data: {} });
    return { phone: res.phone, name: res.name, avatarUrl: res.avatarUrl };
  }
}
