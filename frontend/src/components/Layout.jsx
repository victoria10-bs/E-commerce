import React, { useContext } from 'react'; // 1. Importamos useContext
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import { CartContext } from '../CartContext'; // 2. Importamos el contexto que repara tu carrito
import CartDrawer from '../../components/CartDrawer'; // 3. ¡IMPORTANTE! Importa aquí el componente de tu carrito

const Layout = () => {
  // 4. Traemos la variable que sabe si el carrito debe estar abierto o cerrado
  const { isOpen } = useContext(CartContext);

  return (
    <>
      <Navbar />
      
      {/* 5. Si isOpen es true, el carrito se va a pintar en la pantalla */}
      {isOpen && <CartDrawer />}
      
      <Outlet />
    </>
  );
};

export default Layout;