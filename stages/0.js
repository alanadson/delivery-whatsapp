import { storage } from "../storage.js";

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = 1;

    return "ð OlÃ¡, como vai? \
      \n\nEu sou o *assistente virtual* do Alcoolivery. \
      \n*Posso te ajudar?* ðââï¸ \
      \n----------------------------------- \
      \n1ï¸â£ - ```FAZER PEDIDO``` \
      \n2ï¸â£ - ```VERIFICAR TAXA DE ENTREGA``` \
      \n0ï¸â£ - ```FALAR COM ATENDENTE```";
  },
};