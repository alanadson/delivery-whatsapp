import { storage } from "../storage.js";

export const stageSix = {
    async exec({ from, message, client }){
        if(message === "1"){
            await client.sendText(
                // "5571991714634@c.us",
                from,
                `💰 Precisa de troco para quanto?: 💰(SOMENTE NÚMERO):`
              );
            storage[from].stage = 7

            return;
        } else if(message === "2"){
            storage[from].stage = 5;
  
            return "🗺️ Agora, informe o *ENDEREÇO*. \
            \n ( ```Rua, Número, Bairro``` ) \
            \n\n\n-----------------------------------\
            \n*️⃣ - ```CANCELAR pedido```";
        } else if (message === "*") {
            storage[from].stage = 0;
            storage[from].itens = [];
            return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
        }


        return "❌ *Digite uma opção válida, por favor.*";

    },

};