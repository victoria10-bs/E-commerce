import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// Importamos la lista centralizada de productos
import { products } from '../src/product';
import {CartContext} from '../src/CartContext';

export default function ProductList() {
  //Trae la funcion global diirectamente aqui
  const {addToCart} = useContext(CartContext);
  // Estado solo para la parte interactiva (filtros y búsqueda)
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrado lógico basado en los estados
  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 shadow-xs">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-gray-100 pb-6 mb-8 text-center">
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Catálogo</h2>
          <p className="mt-1 text-base text-gray-500">Explora nuestra ropa disponible.</p>
          
          {/* BUSCADOR */}
          <input
            type="text"
            placeholder="Buscar productos..."
            className="mt-6 w-full max-w-md px-4 py-2 border border-gray-200 rounded-full text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* CATEGORÍAS */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['Todos', 'Remeras', 'Pantalones', 'Camperas', 'Calzado'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-full font-semibold transition ${activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLA DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <Link to={`/producto/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold mt-4 text-gray-900">{product.name}</h3>
                <p className="text-indigo-600 font-black text-lg">${product.price}</p>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, 1);
                }}
                className="w-full mt-4 cursor-pointer bg-gray-900 hover:bg-indigo-600 text-white font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}