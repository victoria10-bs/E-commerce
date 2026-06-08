import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { id: 1, title: "Nueva Colección 2026", text: "Estilo urbano renovado.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200" },
  { id: 2, title: "Liquidación Invierno", text: "Hasta 50% off en abrigos.", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200" },
  { id: 3, title: "Envío Gratis", text: "A todo el país en compras +$100.", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200" }
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden  my-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full"
        >
          <img src={slides[index].image} className="w-full h-full object-cover" alt="slide" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
            <h1 className="text-5xl font-extrabold mb-4">{slides[index].title}</h1>
            <p className="text-xl mb-6">{slides[index].text}</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
              Comprar ahora
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;