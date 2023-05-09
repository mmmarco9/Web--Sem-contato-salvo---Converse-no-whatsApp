import {
  GetActiveChatResponse,
  GetMeResponse,
  IWapi,
  SendMessageResponse,
} from "../app/WapiService";

export class MockWapi implements IWapi {
  async getActiveChat(): Promise<GetActiveChatResponse> {
    return { id: "5555991752924@c.us", isGroup: false, name: "Marco" };
  }
  async sendImageMessage(
    to: string,
    base64Image: string
  ): Promise<SendMessageResponse> {
    console.log(`Enviando imagem '${base64Image}' para ${to}`);
    return { status: "ok" };
  }

  async sendPdfMessage(
    to: string,
    base64Pdf: string
  ): Promise<SendMessageResponse> {
    console.log(`Enviando pdf'${base64Pdf}' para ${to}`);
    return { status: "ok" };
  }
  async sendAudioMessage(
    to: string,
    base64Audio: string
  ): Promise<SendMessageResponse> {
    console.log(`Enviando audio '${base64Audio}' para ${to}`);
    return { status: "ok" };
  }
  async getMe(): Promise<GetMeResponse> {
    return {
      avatarUrl: "",
      name: "João",
      phone: "55991211888",
    };
  }
  async sendTextMessage(
    to: string,
    text: string
  ): Promise<SendMessageResponse> {
    console.log(`Enviando texto '${text}' para ${to}`);
    return { status: "ok" };
  }
  async openDirectChat(phone: string): Promise<{ status: "ok" | "fail" }> {
    return { status: "ok" };
  }
}
