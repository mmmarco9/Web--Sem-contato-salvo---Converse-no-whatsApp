export type SendMessageResponse = {
  status: "ok" | "fail";
};

export type GetMeResponse = {
  phone: string;
  name: string;
  avatarUrl: string;
};

export type GetActiveChatResponse = {
  name: string;
  id: string;
  isGroup: boolean;
};

export interface IWapi {
  openDirectChat(phone: string): Promise<SendMessageResponse>;
}
