import { WhatsAppAPIController } from "./App/whatsappApiController";

const wapiController = new WhatsAppAPIController();

wapiController.addHandler({
  name: "openChat",
  execute: (request, response) => {
    const { data } = request;
    try {
      const link = document.createElement("a");
      link.setAttribute("href", `whatsapp://send?phone=${data.phone}`);
      document.body.append(link);
      link.click();
      document.body.removeChild(link);
      response.send("ok", "abriu");
    } catch (error: any) {
      response.send("fail", "Erro ao abrir chat");
    }
  },
});

wapiController.run();
