const Hero = () => {
  return (
    <div className="relative bg-indigo-900 py-24 px-6 rounded-3xl my-8 text-center overflow-hidden">
      {/* Imagen de fondo con opacidad */}
      <img 
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200" 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        alt="Fondo de tienda"
      />
      
      {/* Contenido sobre la imagen */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold text-white mb-4">Nueva Colección 2026</h1>
        <p className="text-xl text-indigo-100 mb-8">Renová tu estilo con lo último en moda urbana.</p>
      </div>
    </div>
  );
};

export default Hero;