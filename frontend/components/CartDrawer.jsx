import React, { useContext } from 'react';
import { CartContext } from '../src/CartContext'; // Asegúrate de que esta ruta sea la correcta
import { X, Trash2 } from 'lucide-react';

export default function CartDrawer() {
  // Consumimos todo lo necesario del contexto
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, isOpen, setIsOpen } = useContext(CartContext);

  // Si el carrito no está abierto, no renderizamos nada
  if (!isOpen) return null;

  // Cálculo del total general
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Fondo oscuro con efecto blur para cerrar al hacer clic */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>
      
      {/* Panel lateral principal */}
      <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col transition-all duration-300">
        
        {/* Encabezado */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-black text-gray-900">Tu Carrito</h2>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista de productos con scroll */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
              <span className="text-5xl">🛍️</span>
              <p className="font-semibold text-gray-500">Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Imagen del producto */}
                <img 
                  src={item.image || 'https://placehold.co/100'} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-xl bg-gray-50"
                />
                
                {/* Detalles */}
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-indigo-600 font-black text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  
                  {/* Controles de cantidad */}
                  <div className="flex items-center gap-3 mt-2">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 font-bold text-gray-600 transition"
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-900 w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)}
                      className="w-7 h-7 flex items-center justify-center cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-gray-600 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Botón eliminar */}
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-300 cursor-pointer hover:text-red-500 transition-colors p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Resumen Final */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-600">Total a pagar</span>
              <span className="text-2xl font-black text-gray-900">${total.toFixed(2)}</span>
            </div>
            <button className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-black transition-all transform active:scale-95 shadow-lg shadow-indigo-200">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}