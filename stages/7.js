import { storage } from "../storage.js";

export const stageSeven = {
    async exec({ from, message, client }){
        storage[from].thing = message;
        const thing = storage[from].thing;
        await client.sendText(
            from,
            `💰 TROCO PARA: *${thing} reais*.`
          );
          
        storage[from].stage = 5;

        return "🗺️ Agora, informe o *ENDEREÇO*. \
        \n ( ```Rua, Número, Bairro``` ) \
        \n\n\n-----------------------------------\
        \n*️⃣ - ```CANCELAR pedido```";
    }

}