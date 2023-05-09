export async function sendMessage(
  message: string,
  image: string,
  phone: string,
  isUnique: boolean = false,
  isAudio: boolean = false
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Enviando mensagem... ", message, {
        message: message.toString(),
      });
      resolve({ id: "id_fake" });
    }, 5000);
  });
}

export async function testNumber(phone: string): Promise<boolean> {
  return true;
}

export function openChat(phone: string) {
  window.parent.postMessage(
    {
      action: "openChat",
      phone: "55" + phone,
      origin: "plugin-odontobot-sorridents",
    },
    "*"
  );
}

export function listGroups(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    window.parent.postMessage(
      {
        detail: {},
        action: "listGroups",
        origin: "plugin-odontobot-sorridents",
      },
      "*"
    );

    const receiveMessage = (event: any) => {
      if (event.data.origin !== "wapi-script-odontobot") return;
      if (event.data.action !== "listGroups") return;
      window.removeEventListener("message", () => {});
      return resolve(event.data.groups);
    };
    window.addEventListener("message", receiveMessage, false);
  });
}

export function listContacts(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    window.parent.postMessage(
      {
        detail: {},
        action: "listContacts",
        origin: "plugin-odontobot-sorridents",
      },
      "*"
    );

    const receiveMessage = (event: any) => {
      if (event.data.origin !== "wapi-script-odontobot") return;
      if (event.data.action !== "listContacts") return;
      window.removeEventListener("message", () => {});
      return resolve(event.data.groups);
    };
    window.addEventListener("message", receiveMessage, false);
  });
}

export function listChats(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    window.parent.postMessage(
      {
        detail: {},
        action: "listChats",
        origin: "plugin-odontobot-sorridents",
      },
      "*"
    );

    const receiveMessage = (event: any) => {
      if (event.data.origin !== "wapi-script-odontobot") return;
      if (event.data.action !== "listChats") return;
      window.removeEventListener("message", () => {});
      return resolve(event.data.chats);
    };
    window.addEventListener("message", receiveMessage, false);
  });
}

export function listLabels(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    window.parent.postMessage(
      {
        detail: {},
        action: "listLabels",
        origin: "plugin-odontobot-sorridents",
      },
      "*"
    );

    const receiveMessage = (event: any) => {
      if (event.data.origin !== "wapi-script-odontobot") return;
      if (event.data.action !== "listLabels") return;
      window.removeEventListener("message", () => {});
      return resolve(event.data.labels);
    };
    window.addEventListener("message", receiveMessage, false);
  });
}

export function listChatsByLabel(labelId: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    window.parent.postMessage(
      {
        detail: {
          labelId: labelId,
        },
        action: "listChatsByLabel",
        origin: "plugin-odontobot-sorridents",
      },
      "*"
    );

    const receiveMessage = (event: any) => {
      if (event.data.origin !== "wapi-script-odontobot") return;
      if (event.data.action !== "listChatsByLabel") return;
      window.removeEventListener("message", () => {});
      return resolve(event.data.chats);
    };
    window.addEventListener("message", receiveMessage, false);
  });
}

type WaUser = {
  name: string;
  phone: string;
};

export function getActiveChat(): Promise<WaUser> {
  return new Promise((resolve, reject) => {
    window.parent.postMessage(
      {
        detail: {},
        action: "getActiveChat",
        origin: "plugin-odontobot-sorridents",
      },
      "*"
    );

    const receiveMessage = (event: any) => {
      if (event.data.origin !== "wapi-script-odontobot") return;
      if (event.data.action !== "getActiveChat") return;
      window.removeEventListener("message", () => {});
      if (event.data.status === "fail") return reject();
      return resolve(event.data.activeChat);
    };
    window.addEventListener("message", receiveMessage, false);
  });
}

export function contactHaveChattedToday(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

export function getMessageById(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const message = {
      ack: 2,
    };
    resolve(message);
  });
}

export async function getMe(): Promise<{ phone: string; name: string }> {
  return { phone: "55991211888", name: "João" };
}

export async function checkMessageExist(message: string) {
  return {
    exists: true,
    id: "asdf",
  };
}
