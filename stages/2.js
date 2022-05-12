import { cervejas } from "../menu/cervejas.js";
import { vodka } from "../menu/vodka.js";
import { vinho } from "../menu/vinho.js";
import { especiais } from "../menu/especiais.js";
import { whisky } from "../menu/whisky.js";
import { tabacaria } from "../menu/tabacaria.js";
import { refrigerante } from "../menu/refrigerante.js";
import { storage } from "../storage.js";


export const stageTwo = {
  async exec({ from, message }) {
    if (message != "0") {
      storage[from].messageMenu = message;
    }
    // cervejas
    if (message === "1") {
      let msg = "🚨 *CERVEJAS* 🚨\n\n";

      Object.keys(cervejas).map((value) => {
        const element = cervejas[value];
        msg += `\n*${value}* - ${element.title} 
          \nDescrição: ${element.description} 
          \nValor: R$${element.price}\n`;
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```";

      storage[from].stage = 3;

      return msg;
    }

    //Vodkas
    if (message === "2") {
      let msg = "🚨 *VODKAS* 🚨\n\n";

      Object.keys(vodka).map((value) => {
        const element = vodka[value];
        msg += `\n*${value}* - ${element.title} 
          \nDescrição: ${element.description} 
          \nValor: R$${element.price}\n`;
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```";

      storage[from].stage = 3;

      return msg;
    }

    //Vinhos
    if (message === "3") {
      let msg = "🚨 *VINHOS* 🚨\n\n";

      Object.keys(vinho).map((value) => {
        const element = vinho[value];
        msg += `\n*${value}* - ${element.title} 
          \nDescrição: ${element.description} 
          \nValor: R$${element.price}\n`;
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```";

      storage[from].stage = 3;

      return msg;
    }

    //Especiais
    if (message === "4") {
      let msg = "🚨 *ESPECIAIS* 🚨\n\n";

      Object.keys(especiais).map((value) => {
        const element = especiais[value];
        msg += `\n*${value}* - ${element.title} 
          \nDescrição: ${element.description} 
          \nValor: R$${element.price}\n`;
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```";

      storage[from].stage = 3;

      return msg;
    }

    // whisky
    if (message === "5") {
      let msg = "🚨 *WHISKY* 🚨\n\n";
      Object.keys(whisky).map((value) => {
        const element = whisky[value];
        msg += `\n*${value}* - ${element.title} 
          \nDescrição: ${element.description} 
          \nValor: R$${element.price}\n`;
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```";

      storage[from].stage = 3;

      return msg;
    }
    
    // tabacaria
    if (message === "6") {
      let msg = "🚨 *TABACARIA* 🚨\n\n";

      Object.keys(tabacaria).map((value) => {
        const element = tabacaria[value];
        msg += `\n*${value}* - ${element.title} 
          \nDescrição: ${element.description} 
          \nValor: R$${element.price}\n`;
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```";

      storage[from].stage = 3;

      return msg;
    }

    // refrigerantes
    if (message === "7") {
      let msg = "🚨 *REFRIGERANTES* 🚨\n\n";

      Object.keys(refrigerante).map((value) => {
        const element = refrigerante[value];
        msg += `\n*${value}* - ${element.title} 
          \nDescrição: ${element.description} 
          \nValor: R$${element.price}\n`;
      });

      msg +=
        "\n----------------------------------- \
        \n0️⃣ - ```VOLTAR AO MENU ANTERIOR```";

      storage[from].stage = 3;

      return msg;
    }


    // Voltar ao Menu Anterior
    else if (message === "0") {
      storage[from].stage = 0 ;
      storage[from].itens = [];
      return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
    }

    return "❌ *Digite uma opção válida, por favor.*";
  },
};
