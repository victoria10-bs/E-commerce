import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. El carrito inicia como un arreglo vacío []
  const [cart, setCart] = useState([]);
  
  // 2. Estado para controlar si el menú del carrito (Drawer) está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  
  // 3. Estado para guardar el usuario logueado (Se mantiene al reiniciar)
  const [user, setUser] = useState(() => {
    // Al arrancar, buscamos si hay un usuario guardado en el almacenamiento local
    const usuarioGuardado = localStorage.getItem('usuario_sesion');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  // CONTROL DE AGREGAR AL CARRITO (Evita duplicados y errores de Keys)
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Verificamos si el producto ya existe en el carrito
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Si ya existe, sumamos la nueva cantidad a la que ya tenía
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Si es un producto nuevo, lo agregamos normalmente al arreglo
      return [...prevCart, { ...product, quantity }];
    });
  };

  // INCREMENTAR CANTIDAD DESDE EL CARRITO
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DISMINUIR CANTIDAD DESDE EL CARRITO
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Si la cantidad llega a 0, lo elimina automáticamente
    );
  };

  // ELIMINAR PRODUCTO POR COMPLETO
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // FUNCIÓN PARA INICIAR SESIÓN (Guarda en localStorage para que no se borre)
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('usuario_sesion', JSON.stringify(userData)); // <-- Corrección aquí
    console.log("Usuario conectado:", userData);
  };

  // FUNCIÓN PARA CERRAR SESIÓN (Limpia el localStorage)
  const logout = () => {
    setUser(null);
    localStorage.removeItem('usuario_sesion'); // <-- Corrección aquí
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        isOpen, 
        setIsOpen, 
        user, 
        login, 
        logout
      }}
    >
      {children}
    </CartContext.Provider>
  );
};