import { useCart } from '../context/CartContext';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { formatWhatsAppMessage, openWhatsApp } from '../utils/whatsapp';

const STORE_PHONE = '5591982005371';

export default function Cart({ onClose }: { onClose: () => void }) {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleCheckout = () => {
    if (state.items.length === 0) {
      alert('Por favor, adicione itens ao carrinho antes de finalizar a compra.');
      return;
    }

    const message = formatWhatsAppMessage(state.items, state.total);
    openWhatsApp(STORE_PHONE, message);

    dispatch({ type: 'CLEAR_CART' });
    onClose();
  };

  if (state.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
        <p className="text-xl font-semibold text-gray-900 mb-2">Seu carrinho está vazio</p>
        <p className="text-gray-600">Adicione produtos para começar suas compras</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {state.items.map((item) => (
        <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{item.category}</p>
            <p className="text-blue-600 font-medium">R$ {item.price.toFixed(2)}</p>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <button
              onClick={() => removeItem(item.id)}
              className="p-1 rounded-full hover:bg-red-50 text-red-600"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-200"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-200"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Subtotal:</span>
          <span className="text-xl font-bold text-blue-600">
            R$ {state.total.toFixed(2)}
          </span>
        </div>
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          onClick={handleCheckout}
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Finalizar Compra via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}