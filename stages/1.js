import { menu } from "../menu/menu.js";
import { storage } from "../storage.js";
import { neighborhoods } from "./neighborhoods.js";

export const stageOne = {
  async exec({ from, message, client }) {
    // Cardápio
    if (message === "1") {
      let msg = "🚨 *CARDÁPIO* 🚨\n\n";

      Object.keys(menu).map((value) => {
        const element = menu[value];
          msg += `*${value}* - ${element.description}\n`;
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```CANCELAR PEDIDO``` \
        \n\nPara visualizar o cardápio online, *acesse*: https://meupedido.delivery/alcoolivery \
        \n\n*Digite o número da categoria que você deseja pedir:*";

      storage[from].stage = 2;

      return msg;
    }

    // Taxa de entrega
    else if (message === "2") {
      return (
        "\n----------------------------------- \
        \n1️⃣ - FAZER PEDIDO \
        \n0️⃣ - FALAR COM ATENDENTE \
        \n\n" +
        neighborhoods +
        "\n----------------------------------- \
        \n1️⃣ - FAZER PEDIDO \
        \n0️⃣ - FALAR COM ATENDENTE"
      );
    }

    // Falar com atendente
    else if (message === "0") {
      await client.sendText(
        "5571991714634@c.us", // numero do atendimento
        `🔔 *Nova Solicitação de atendimento*\
        \n*Numero para contato*: ${from}`
      );
      // await client.sendContact(from, /*Mudar para o numero do atendimento*/"5571991714634@c.us");
      // await client.sendVCard(from,"Novo Pedido", "Eu Mesmo","557191714634");
      storage[from].stage = 8;
      storage[from].itens = [];
      return "⏳ *Aguarde um instante*.\
      \n🔃 Encaminhando você para um atendente, aguarde alguns instantes para ser atendido. \n 1️⃣ - Para voltar ao menu ";
    }

    return "❌ *Digite uma opção válida, por favor.*";
  },
};
