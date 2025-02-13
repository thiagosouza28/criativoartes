import { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const { dispatch } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const productSectionRef = useRef<HTMLDivElement | null>(null);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  // Lógica de paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    // Rolar suavemente para a seção de produtos
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end items-center space-x-4">
        <label className="text-gray-700">Itens por página:</label>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
            productSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>
      </div>

      <div ref={productSectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  R$ {product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200"
                >
                  <Plus className="w-4 h-4" />
                  <span>Adicionar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de paginação */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg bg-blue-100 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-200 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === number
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg bg-blue-100 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-200 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
