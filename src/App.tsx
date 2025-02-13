import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';
import { X, Facebook, Instagram, Linkedin, MapPin, Building2, Phone, Mail } from 'lucide-react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar 
          onCartClick={() => setIsCartOpen(true)}
          onProductsClick={() => scrollToSection(productsRef)}
          onServicesClick={() => scrollToSection(servicesRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
        <main>
          <Hero />
          <section ref={productsRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Nossos Produtos</h2>
              <p className="text-xl text-gray-600 mb-8 text-center">Qualidade e variedade para atender suas necessidades</p>
              <ProductList products={products} />
            </div>
          </section>
          <section ref={servicesRef}>
            <Services />
          </section>
        </main>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
                    <h2 className="text-xl font-semibold">Seu Carrinho</h2>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    <Cart onClose={() => setIsCartOpen(false)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer ref={contactRef} className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6">Contato</h3>
                <div className="space-y-3">
                  <p className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Rod PA 252 Ramal da Campina</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <span>Moju - PA</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>Tel: (91) 98200-5371</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>criativoartes7@gmail.com</span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6">Horário de Funcionamento</h3>
                <div className="space-y-3">
                  <p className="flex items-center space-x-3">
                    <span className="text-blue-400">●</span>
                    <span>Segunda a Quinta: 8h às 18h</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-blue-400">●</span>
                    <span>Sexta: 8h às 17h</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-blue-400">●</span>
                    <span>Sábado: Fechado</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-blue-400">●</span>
                    <span>Domingo: Fechado</span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Criativo Artes. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
