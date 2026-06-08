import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      {/* Sección Principal con Columnas */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Columna 1: Sobre la tienda */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-lg font-bold tracking-wider">MI TIENDA DE ROPA</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Tu destino favorito para encontrar las últimas tendencias en moda urbana, jeans y calzado exclusivo con la mejor calidad.
          </p>
        </div>
        

        {/* Columna 3: Soporte / Ayuda */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-1">Ayuda</h4>
          <span onClick={() => navigate('#')} className="hover:text-white text-sm cursor-pointer transition-colors w-fit">Contacto</span>
          <span className="hover:text-white text-sm cursor-pointer transition-colors w-fit">Preguntas Frecuentes</span>
          <span className="hover:text-white text-sm cursor-pointer transition-colors w-fit">Términos y Condiciones</span>
        </div>

        {/* Columna 4: Redes Sociales e Información */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-1">Síguenos</h4>
          <p className="text-sm text-gray-400">No te pierdas de ninguna novedad y ofertas exclusivas.</p>
          <div className="flex gap-4 mt-1">
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition-all shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Línea Divisoria Inferior */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-gray-500">
            &copy; {currentYear} **Mi Tienda de Ropa**. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-gray-500">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Política de Privacidad</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Defensa del Consumidor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}