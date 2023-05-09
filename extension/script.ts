import { WhatsAppAPIController } from "./App/whatsappApiController";

const wapiController = new WhatsAppAPIController();

wapiController.addHandler({
  name: "openChat",
  execute: (request, response) => {
    const { data } = request;
    console.log("data", data);
    try {
      const link = document.createElement("a");
      link.setAttribute("href", `whatsapp://send?phone=${data.phone}`);
      document.body.append(link);
      link.click();
      document.body.removeChild(link);
      response.send("ok", "deu certo");
    } catch (error: any) {
      response.send("fail", "Erro ao obter o chat ativo");
    }
  },
});

wapiController.run();


