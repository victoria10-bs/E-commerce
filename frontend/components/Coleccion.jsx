import React from 'react';
import ProductList from './ProductList';

export default function Coleccion({ onAddToCart }) {
  return (
    <div className=" min-h-screen animate-fade-in">
      {/* Cabecera estilizada exclusiva de la página de Colección */}
      <div className="bg-cyan-800 text-white py-12 px-4 text-center shadow-md">
        <h1 className="text-4xl pt-20 font-white uppercase tracking-wider sm:text-4xl">
          Colección Completa 2026
        </h1>
        <p className="mt-2 text-sm text-white max-w-md mx-auto">
          Explora nuestro catálogo exclusivo de indumentaria urbana con las últimas tendencias.
        </p>
      </div>

      {/* Grid de productos de ropa */}
      <div className="max-w-7xl  mx-auto py-6">
        <ProductList onAddToCart={onAddToCart} />
      </div>
    </div>
  );
}