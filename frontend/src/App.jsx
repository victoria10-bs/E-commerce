import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Coleccion from '../components/Coleccion';
import Login from '../components/login';
import Registro from '../components/Registro';
// IMPORTANTE: Aquí deberías importar tu CartDrawer cuando lo crees
import CartDrawer from '../components/CartDrawer';
import HeroCarrusel from '../components/HeroCarrusel';
import Newsletter from '../components/Newsletter';
import Banner from '../components/Banner';

function App() {
  const [view, setView] = useState('inicio');
  const [user, setUser] = useState(null);
  
  // Lógica del carrito
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para abrir/cerrar
const increaseQuantity = (id) => {
  setCart(cart.map(item => 
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  ));
};

const decreaseQuantity = (id) => {
  setCart(cart.map(item => 
    item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
  ));
};
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Funciones de sesión
  const handleLogin = (userData) => {
    setUser(userData);
    setView('inicio');
  };

  const handleLogout = () => {
    setUser(null);
    setView('inicio');
  };

  return (
    <div className="min-h-screen bg-red flex flex-col font-sans">
      
      {/* Barra de navegación con la función para abrir el carrito */}
      {view !== 'login' && view !== 'registro' && (
        <Navbar 
          cartCount={cart.length} 
          setView={setView} 
          currentView={view} 
          user={user} 
          onLogout={handleLogout}
          onOpenCart={() => setIsCartOpen(true)} // Nueva prop añadida
        />
      )}

      {/* Aquí irá tu CartDrawer cuando lo tengas */}
      <CartDrawer isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      cart={cart}
      onRemove={removeFromCart}
      onIncrease={increaseQuantity}
  onDecrease={decreaseQuantity}/>

      {/* Contenido Principal */}
      <main className="flex-grow">
        {view === 'inicio' ? (
          <> 
            {/* <Hero setView={setView} /> */}
            {/* <HeroCarrusel/> */}
            <Banner />
            {/* <Newsletter */}
  {/* category="¡Suscríbete!" */}
  {/* title="Recibe nuestras ofertas" */}
  {/* description="Déjanos tu correo para no perderte nada." */}
  {/* buttonText="Unirse" */}
  {/* buttonUrl="#" */}
{/* /> */}
            <Features />
          </>
        ) : view === 'login' ? (
          <Login onLogin={handleLogin} setView={setView} />
        ) : view === 'registro' ? (
          <Registro setView={setView} />
        ) : (
          <Coleccion onAddToCart={addToCart} />
        )}
      </main>
      
      

      <Footer />
    </div>
  );
}

export default App;