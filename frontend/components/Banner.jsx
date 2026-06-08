import React from 'react';

// Reemplaza esto con la URL real de tu imagen
const BANNER_IMAGE_URL = "https://png.pngtree.com/thumb_back/fw800/background/20251231/pngtree-winter-warmth-sale-banner-with-cold-weather-apparel-and-snowflakes-image_20969613.webp";

const EcommerceBanner = () => {
    return (
    <section className="relative bg-white text-gray-900 overflow-hidden font-sans">
      {/* Sección del banner principal */}
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
          {/* Contenido del texto del banner */}
        <div className="space-y-6 text-center md:text-left">
            <p className="text-xl md:text-2xl font-bold tracking-tight text-red-600 uppercase">
            ¡No te lo pierdas!
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black leading-tight">
            Liquidación <br /> <span className="text-black">Invierno</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
            Descuentos increíbles en toda nuestra colección de invierno. Ropa, calzado y accesorios con hasta un 50% de descuento. ¡Renueva tu armario antes de que se acabe!
            </p>
            <button className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-black rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
            Ver Ofertas
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </button>
            </div>

          {/* Imagen del banner (puedes ajustar el tamaño) */}
            <div className="relative group">
            <img 
                src={BANNER_IMAGE_URL} 
                alt="Modelo de moda de invierno con bolsas de compra" 
                className="w-full h-auto max-w-lg mx-auto md:max-w-none rounded-2xl shadow-2xl transition duration-500 transform group-hover:scale-105"
            />
            {/* Superposición opcional para mejorar el contraste del texto si la imagen lo requiere */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div> */}
            </div>

        </div>
      </div>

      {/* Sección del formulario de suscripción (Debajo del banner) */}
      <div className="bg-gray-50 border-t border-gray-100 mt-12 md:mt-0">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Recibe nuestras ofertas
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Sé el primero en enterarte de nuestras promociones, lanzamientos exclusivos y consejos de estilo directamente en tu bandeja de entrada.
          </p>
          <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              required
              className="w-full md:w-auto flex-grow px-6 py-3.5 border-2 border-gray-300 rounded-lg text-lg focus:border-black focus:ring-black focus:outline-none transition"
            />
            <button type="submit" className="w-full md:w-auto px-8 py-3.5 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBanner;