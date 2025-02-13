export function formatWhatsAppMessage(items: any[], total: number): string {
  const formattedItems = items
    .map((item) => {
      const itemTotal = item.price * item.quantity;
      return `▫️ ${item.quantity}x ${item.name}\n   R$ ${itemTotal.toFixed(2)}`;
    })
    .join('\n');

  const message = 
    `*PEDIDO - CRIATIVO ARTES*\n\n` +
    
    `*ITENS DO PEDIDO:*\n${formattedItems}\n\n` +
    
    `*TOTAL: R$ ${total.toFixed(2)}*\n\n` +
    
    `Olá! Gostaria de confirmar este pedido.\n` +
    `Por favor, me informe:\n\n` +
    `✓ Prazo de entrega\n` +
    `✓ Formas de pagamento\n` +
    `✓ Frete para meu endereço\n\n` +
    `Agradeço a atenção!`;

  return encodeURIComponent(message);
}

export function openWhatsApp(phoneNumber: string, message: string) {
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
}