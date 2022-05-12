
import { storage } from "../storage.js";



export const stageFive = {
    async exec({ from, message, client }) {
      storage[from].address = message;
    //   storage[from].stage = 5;
      const address = storage[from].address;
      const phone = from.split("@");
  
      if (message === "*") {
        storage[from].stage = 0;
        storage[from].itens = [];
        return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
      }
  
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
  
      // await client.sendContact("5571991714634@c.us", from);
  
      await client.sendText(
        // "5571991714634@c.us",
        from,
        `🔔 *NOVO PEDIDO* 🔔: \
        \n\n📞 Cliente: *+${phone[0]}* \
        \n🧁 Pedidos: *${desserts}* \
        \n🚚 Taxa de entrega: *Consulte a opcao de entrega*. \
        \n📍 Endereço: *${address}* \
        \n💰 Valor do pedido: *${total} reais + Taxa de entrega(CONSULTAR TABELA)*. \
        \n⏳ Tempo de entrega: *aproximadamente 30 minutos*. \
        \n🛑 Detalhes: *${message}*`
      );
  
      storage[from].stage = 0;
      storage[from].itens = [];
  
      return "✅ *Prontinho, pedido feito!* \
      \n\nAgora, se você ainda não sabe o valor da taxa de entrega para sua região.\
      \nVou te passar para um atendente para que ele verique o valor da *taxa de entrega*.\
      \n\n⏳ *Aguarde um instante e ele entrará em contato com você*.";
    },
  };

