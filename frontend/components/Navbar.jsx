// import { useState, useContext } from 'react';
// import { UserCircleIcon } from '@heroicons/react/24/outline';
// import { ShoppingCart } from 'lucide-react';
// import { CartContext } from '../src/CartContext';
// import { Link } from 'react-router-dom'; // Importamos Link para navegación

// export default function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showConfirmLogout, setShowConfirmLogout] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
  
//   // Consumimos el contexto (asegúrate de que setIsOpen y user estén en tu Provider)
//   const { cart, setIsOpen, user, logout } = useContext(CartContext);

//   return (
//     <nav className="fixed backdrop-blur-md bg-[#f5f2ee]/90 border-b border-gray-100 w-full top-0 z-50 shadow-xs">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        
//         {/* LOGO */}
//         <div className="text-xl font-black text-gray-900 tracking-wider">Frida</div>

//         {/* ENLACES CENTRALES */}
//         <div className="flex gap-6">
//           <Link to="/" className="text-sm font-bold hover:text-indigo-600 cursor-pointer transition">Inicio</Link>
//           <Link to="/coleccion" className="text-sm font-bold hover:text-indigo-600 cursor-pointer transition">Ropa</Link>
//         </div>

//         {/* BLOQUE DE USUARIO Y CARRITO */}
//         <div className="flex items-center gap-6">
//           {user ? (
//             <div className="relative flex items-center gap-4">
//               <button onClick={() => setShowMenu(!showMenu)} className="cursor-pointer flex items-center gap-2">
//                 <span className="text-sm">Hola, {user?.name}</span>
//                 <UserCircleIcon className="h-8 w-8 text-indigo-600"/>
//               </button>

//               {/* Menú desplegable */}
//               {showMenu && (
//                 <div className="absolute right-0 top-12 w-48 bg-white border rounded-xl shadow-lg p-4 z-50">
//                   <button onClick={() => { setShowConfirmLogout(true); setShowMenu(false); }} className="text-red-500 text-sm font-bold cursor-pointer">
//                     Cerrar sesión
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login" className="cursor-pointer text-sm font-bold">Iniciar sesión</Link>
//           )}

//           {/* Botón del Carrito */}
//           <button 
//             onClick={() => setIsOpen(true)} 
//             className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-black text-gray-800 cursor-pointer hover:bg-gray-200 transition-colors relative"
//           >
//             <ShoppingCart size={16} color="#0767e4" strokeWidth={1.5} />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* MODAL DE CONFIRMACIÓN */}
//       {showConfirmLogout && (
//         <div className="fixed right-0 left-200 z-50 flex items-center justify-center  bg-opacity-50">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
//             <h3 className="text-lg font-bold mb-4">¿Deseas salir de la cuenta?</h3>
//             <div className="flex gap-4">
//               <button  onClick={() => setShowConfirmLogout(false)} className="cursor-pointer flex-1 bg-gray-200 p-2 rounded-lg">Cancelar</button>
//               <button onClick={() => { logout(); setShowConfirmLogout(false); }} className="cursor-pointer flex-1 bg-red-600 text-white p-2 rounded-lg">Salir</button>
//             </div>
//           </div>
//         </div>
//       )}
    

      
//     </nav>
//   );
// }

import { useState, useContext } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { CartContext } from '../src/CartContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const { cart, setIsOpen, user, logout } = useContext(CartContext);

  return (
    <nav className="fixed backdrop-blur-md bg-[#f5f2ee]/90 border-b border-gray-100 w-full top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        
        {/* LOGO */}
        <div className="text-xl font-black text-gray-900 tracking-wider">Frida</div>

        {/* ENLACES CENTRALES (Solo visibles en PC - md:flex) */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-bold hover:text-indigo-600 transition">Inicio</Link>
          <Link to="/coleccion" className="text-sm font-bold hover:text-indigo-600 transition">Ropa</Link>
        </div>

        {/* BLOQUE DERECHO (Usuario + Carrito + Botón Hamburguesa) */}
        <div className="flex items-center gap-4">
          
          {/* Botón Hamburguesa (Solo visible en móviles - md:hidden) */}
          <button 
            className="md:hidden p-2 text-gray-700 cursor-pointer" 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Elementos de PC (Ocultos en móviles - hidden md:flex) */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <div className="relative flex items-center gap-4">
                <button onClick={() => setShowMenu(!showMenu)} className="cursor-pointer flex items-center gap-2">
                  <span className="text-sm font-bold">Hola, {user?.name}</span>
                  <UserCircleIcon className="h-8 w-8 text-indigo-600"/>
                </button>
                {showMenu && (
                  <div className="absolute right-0 top-12 w-48 bg-white border rounded-xl shadow-lg p-4 z-50">
                    <button onClick={() => { setShowConfirmLogout(true); setShowMenu(false); }} className="text-red-500  text-sm font-bold cursor-pointer">
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="cursor-pointer text-sm font-bold">Iniciar sesión</Link>
            )}

            <button 
              onClick={() => setIsOpen(true)} 
              className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-black text-gray-800 cursor-pointer hover:bg-gray-200 transition-colors relative"
            >
              <ShoppingCart size={16} color="#0767e4" strokeWidth={1.5} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE (Visible solo cuando showMobileMenu es true) */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl absolute w-full">
          <Link to="/" onClick={() => setShowMobileMenu(false)} className="text-sm font-bold text-gray-700">Inicio</Link>
          <Link to="/coleccion" onClick={() => setShowMobileMenu(false)} className="text-sm font-bold text-gray-700">Ropa</Link>
          <hr />
          
          {user ? (
            <button onClick={() => { setShowConfirmLogout(true); setShowMobileMenu(false); }} className="text-red-500 text-sm font-bold text-left">
              Cerrar sesión
            </button>
          ) : (
            <Link to="/login" onClick={() => setShowMobileMenu(false)} className="text-sm font-bold cursor-pointer text-indigo-600">Iniciar sesión</Link>
          )}
        </div>
      )}

      {/* MODAL DE CONFIRMACIÓN */}
      {showConfirmLogout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
            <h3 className="text-lg font-bold mb-4">¿Deseas salir de la cuenta?</h3>
            <div className="flex gap-4">
              <button onClick={() => setShowConfirmLogout(false)} className="cursor-pointer flex-1 bg-gray-200 p-2 rounded-lg font-bold">Cancelar</button>
              <button onClick={() => { logout(); setShowConfirmLogout(false); }} className="cursor-pointer flex-1 bg-red-600 text-white p-2 rounded-lg font-bold">Salir</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

