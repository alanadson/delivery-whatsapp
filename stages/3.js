import { cervejas } from "../menu/cervejas.js";
import { vodka } from "../menu/vodka.js";
import { vinho } from "../menu/vinho.js";
import { especiais } from "../menu/especiais.js";
import { whisky } from "../menu/whisky.js";
import { tabacaria } from "../menu/tabacaria.js";
import { refrigerante } from "../menu/refrigerante.js";
import { storage } from "../storage.js";

export const stageThree = {
  async exec({ from, message, client }) {
    const order =
      "\n\n-----------------------------------      \
      \n#️⃣ - ```FINALIZAR pedido``` \
      \n0️⃣ - ```VOLTAR AO MENU PARA ADICIONAR MAIS PEDIDOS``` \
      \n*️⃣ - ```CANCELAR pedido```";

    // Voltar ao Menu Anterior
    if (message === "0") {
      storage[from].stage = 1;

      return "🔴 Digite 1 para visualizar o menu novamente.";
    } else if (message === "*") {
      storage[from].stage = 0;
      storage[from].itens = [];

      return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
    } else if (message === "#") {
      let desserts = "";
      const itens = storage[from].itens;
      itens.map((item, index) => {
        if (index == itens.length - 1) {
          desserts += item.description + ".";
        } else {
          desserts += item.description + ", ";
        }
      });
  
      let total = 0;
      storage[from].itens.forEach((element) => {
        total += element.price;
      });

      await client.sendText(
        from,
        `🔔 *TOTAL PEDIDO* 🔔: \
        \n💰 Valor do pedido: *${total} reais*.`

      );

      storage[from].stage = 4;

      return "💸 Digite a forma de PAGAMENTO. \
      \n ACEITAMOS OS SEGUINTES PAGAMENTOS: \
      \n1️⃣Pix \
      \n2️⃣Cartão de crédito/débito \
      \n3️⃣Dinheiro \
      \n\n\n-----------------------------------\
      \n*️⃣ - CANCELAR pedido";
    } else {
      if (storage[from].messageMenu == "1" && !cervejas[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
      if (storage[from].messageMenu == "2" && !vodka[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
      if (storage[from].messageMenu == "3" && !vinho[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
      if (storage[from].messageMenu == "4" && !especiais[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
      if (storage[from].messageMenu == "5" && !whisky[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
      if (storage[from].messageMenu == "6" && !tabacaria[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
      if (storage[from].messageMenu == "7" && !refrigerante[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
    }

    if (storage[from].messageMenu == "1") {
      storage[from].itens.push(cervejas[message]);
      return `✅ ${cervejas[message].title} adicionado com sucesso!` + order;
    }

    if (storage[from].messageMenu == "2") {
      storage[from].itens.push(vodka[message]);
      return `✅ ${vodka[message].title} adicionado com sucesso!` + order;
    }
    if (storage[from].messageMenu == "3") {
      storage[from].itens.push(vinho[message]);
      return `✅ ${vinho[message].title} adicionado com sucesso!` + order;
    }
    if (storage[from].messageMenu == "4") {
      storage[from].itens.push(especiais[message]);
      return `✅ ${especiais[message].title} adicionado com sucesso!` + order;
    }
    if (storage[from].messageMenu == "5") {
      storage[from].itens.push(whisky[message]);
      return `✅ ${whisky[message].title} adicionado com sucesso!` + order;
    }
    if (storage[from].messageMenu == "6") {
      storage[from].itens.push(tabacaria[message]);
      return `✅ ${tabacaria[message].title} adicionado com sucesso!` + order;
    }
    if (storage[from].messageMenu == "7") {
      storage[from].itens.push(refrigerante[message]);
      return `✅ ${refrigerante[message].title} adicionado com sucesso!` + order;
    }
  },
};