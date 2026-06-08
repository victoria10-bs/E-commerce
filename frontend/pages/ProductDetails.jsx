import React, { useState, useContext } from 'react'; // 1. Agregamos useContext aquí
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../src/CartContext'; // 2. Importa tu contexto (ajusta la ruta si es necesario)

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  
  // 3. Obtenemos la función addToCart del contexto
  const { addToCart, setIsOpen} = useContext(CartContext);

  const product = products?.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-20 text-center text-xl">
        <h2 className="text-2xl font-bold">Producto no encontrado 😔</h2>
        <Link to="/" className="text-indigo-600 underline mt-4 block">
          Volver al inicio
        </Link>
      </div>
    );
  }

  // 4. Creamos la función manejadora para el botón
  const handleAddToCart = () => {
    addToCart(product, quantity);
    //setIsOpen(true);
    //alert('¡Producto agregado al carrito!'); // Opcional: aviso visual
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:py-12">
      <Link to="/coleccion" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 mb-8 block">
        &larr; Volver
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 rounded-3xl overflow-hidden p-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-[500px] object-cover rounded-2xl" 
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2">
            {product.category}
          </span>
          <h1 className="text-5xl font-black text-gray-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Esta es una prenda exclusiva de nuestra nueva colección. Calidad premium garantizada.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-3">Selecciona tu talle:</h4>
            <div className="flex gap-3">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-xl border-2 font-bold transition ${
                    selectedSize === size 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                className="px-4 py-3 hover:bg-gray-100"
              >-</button>
              <span className="px-6 py-3 font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)} 
                className="px-4 py-3 hover:bg-gray-100"
              >+</button>
            </div>
            {/* 5. Asignamos el evento al botón */}
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-black text-white py-4 rounded-xl font-black hover:bg-gray-800 transition shadow-xl"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;