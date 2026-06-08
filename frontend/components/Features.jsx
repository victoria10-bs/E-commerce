
const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 text-center">
      <div className="p-6 bg-white rounded-xl shadow-sm">
        <h3 className="font-bold text-lg">📦 Envío Gratis</h3>
        <p className="text-gray-500">En compras mayores a $100</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-sm">
        <h3 className="font-bold text-lg">💳 Cuotas sin interés</h3>
        <p className="text-gray-500">Con todas las tarjetas</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-sm">
        <h3 className="font-bold text-lg">🔄 Devoluciones</h3>
        <p className="text-gray-500">Hasta 30 días de plazo</p>
      </div>
    </div>
  );
};
export default Features;