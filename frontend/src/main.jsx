import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ProductDetailContainer from '../pages/ProductDetailContainer.jsx';
import Coleccion from '../components/Coleccion.jsx'; // Importa tu componente Coleccion
import { CartProvider } from '../src/CartContext'; // Asegúrate que esta ruta sea la correcta
//import Navbar from '../components/navbar.jsx';
import Layout from '../src/components/Layout';
import Login from '../components/login';
import Registro from '../components/Registro';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter basename="/E-commerce">
        <Routes>
          {/* El Layout envuelve a las rutas hijas */}
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/coleccion" element={<Coleccion />} />
            <Route path="/producto/:id" element={<ProductDetailContainer />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/registro" element={<Registro/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);