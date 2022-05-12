import { storage } from "../storage.js";

export const stageFour = {
  async exec({ from, message, client }) {

    // pix
    if (message === "1"){
      await client.sendText(
        from,
        `💰 *Forma de pagamento* 💰: \
        \n💵 Pagamento: *PIX* 
        \n*PIX:* *71991747296*
        \n Joice Oliveira Mota
        \n Nubank`
      );
      storage[from].stage = 5;
  
      return "🗺️ Agora, informe o *ENDEREÇO*. \
      \n ( ```Rua, Número, Bairro``` ) \
      \n\n\n-----------------------------------\
      \n*️⃣ - ```CANCELAR pedido```";
    }

    // cartao credito/debito
    if (message === "2"){
      await client.sendText(
        from,
        `💰 *Forma de pagamento* 💰: \
        \n💵 Pagamento: *Cartão Crédito/Débito*`
      );
      storage[from].stage = 5;
  
      return "🗺️ Agora, informe o *ENDEREÇO*. \
      \n ( ```Rua, Número, Bairro``` ) \
      \n\n\n-----------------------------------\
      \n*️⃣ - ```CANCELAR pedido```";
    }
    // dinheiro
    if (message === "3"){
      await client.sendText(
        from,
        `💰 *Forma de pagamento* 💰: \
        \n💵 Pagamento: Dinheiro`
      );

      storage[from].stage = 6;
  
      return "\n Precisa de troco? \n1️⃣SIM \n2️⃣NÃO`;"
    }

    // cancelar pedido
    if (message === "*") {
      storage[from].stage = 0;
      storage[from].itens = [];
      return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
    }

    return "❌ *Digite uma opção válida, por favor.*";
    
  },
};
