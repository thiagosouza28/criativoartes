import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
  onProductsClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({ 
  onCartClick, 
  onProductsClick, 
  onServicesClick, 
  onContactClick 
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const handleMobileClick = (callback: () => void) => {
    setIsOpen(false);
    callback();
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {}
              <img 
                src="./src/img/logo.png"
                alt="Logo Criativo Artes" 
                className="h-8"
              />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <button 
                onClick={onProductsClick}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
              >
                Produtos
              </button>
              <button 
                onClick={onServicesClick}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={onContactClick}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
              >
                Contato
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={onCartClick}
              className="p-2 rounded-full text-gray-600 hover:text-blue-600 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleMobileClick(onProductsClick)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600"
            >
              Produtos
            </button>
            <button 
              onClick={() => handleMobileClick(onServicesClick)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleMobileClick(onContactClick)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
