import { ComwoClient } from "../app/Comwo";
import { IWapi } from "../app/WapiService";

export class Wapi implements IWapi {
  constructor(private wapiClient: ComwoClient) {}

  async openDirectChat(phone: string): Promise<{ status: "ok" | "fail" }> {
    const res = await this.wapiClient.execute({
      name: "openChat",
      data: { phone },
    });
    return res as any;
  }
}
