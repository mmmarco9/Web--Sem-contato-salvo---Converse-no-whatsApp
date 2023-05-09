
export type SendMessageResponse = {
    status: 'ok' | 'fail'
}

export type GetMeResponse = {
    phone: string;
    name: string;
    avatarUrl: string;
}

export type GetActiveChatResponse = {
    name: string;
    id: string;
    isGroup: boolean;
}

export interface IWapi {
    sendTextMessage(to: string, text: string): Promise<SendMessageResponse>
    sendImageMessage(to: string, base64Image: string, caption?:string): Promise<SendMessageResponse>
    sendAudioMessage(to: string, base64Audio: string): Promise<SendMessageResponse>
    sendPdfMessage(to: string, base64Pdf: string): Promise<SendMessageResponse>
    openDirectChat(phone:string): Promise<SendMessageResponse>
    getMe(): Promise<GetMeResponse>
    getActiveChat(): Promise<GetActiveChatResponse>
}