import React from 'react';
import ProductDetail from './ProductDetails';

// Aquí defines tus productos o los traes desde donde los tengas guardados
const products = [ 
    { 
    id: 1, 
    name: 'Remera Algodón Premium', 
    price: 25, 
    category: 'Remeras',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    name: 'Jeans Slim Fit Azul', 
    price: 45, 
    category: 'Pantalones',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    name: 'Campera Bomber Urbana', 
    price: 85, 
    category: 'Camperas',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    name: 'Zapatillas Retro Blancas', 
    price: 70, 
    category: 'Calzado',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 5, 
    name: 'Camisa Lino Estival', 
    price: 35, 
    category: 'Remeras',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80' 
  },
  { 
    id: 6, 
    name: 'Pantalón Chino Beige', 
    price: 45, 
    category: 'Pantalones',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShVhiAaXnbv4t2OlrIj1o5m-UxMa9Usr3x8aEwOUYK0l7jMI9_oPMXAIOdhDoGw0BP5nle0ogqzsa6VTKiTF0Jt1dmcwgHOTFRkDqgrVTomzvJ6Ggx0XGU' 
  },
  { 
    id: 7, 
    name: 'Campera de Cuero Negra', 
    price: 120, 
    category: 'Camperas',
    image: 'https://scandinavianar.vtexassets.com/arquivos/ids/182345-800-auto?v=638580235146530000&width=800&height=auto&aspect=true' 
  },
  { 
    id: 8, 
    name: 'Botas de Cuero Marrón', 
    price: 95, 
    category: 'Calzado',
    image: 'https://posco.com.ar/cdn/shop/files/18_d7228ec7-2c9b-4698-80cb-5f63fe314e76.png?v=1726096673&width=1445' 
  },
 ];

const ProductDetailContainer = () => {
  return <ProductDetail products={products} />;
};

export default ProductDetailContainer;