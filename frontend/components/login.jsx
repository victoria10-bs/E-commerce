// import React, { useState, useContext } from 'react'; 
// import { CartContext } from '../src/CartContext'; // Asegúrate de que la ruta apunte correctamente a tu CartContext
// import { useNavigate } from 'react-router-dom';

// export default function Login() { 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   // Consumimos la función 'login' de nuestro contexto actualizado
//   const { login } = useContext(CartContext);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 1. Validación básica: verificar que no haya campos vacíos
//     if (email.trim() === '' || password.trim() === '') {
//       setError('Por favor completa todos los campos');
//       return;
//     }

//     // 2. Si pasa la validación, limpiamos errores
//     setError('');
    
//     // 3. Pasamos los datos al contexto (ahora se guardarán automáticamente en localStorage)
//     const datosDelUsuario = { name: 'Usuario Frida', email: email };
//     login(datosDelUsuario);
    
//     // 4. Redirigimos al inicio
//     navigate('/');
//   };

//   return (
//     <div className="flex justify-center items-center py-20 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">Bienvenido de nuevo</h2>
//         <p className="text-gray-500 mb-8">Ingresa tus datos para continuar</p>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Correo electrónico</label>
//             <input 
//               type="email" 
//               className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="tu@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-1">Contraseña</label>
//             <input 
//               type="password" 
//               className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button 
//             type="submit" 
//             className="w-full bg-gray-900 text-white p-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
//           >
//             Iniciar Sesión
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-gray-600 text-center">
//           ¿Aún no tienes cuenta?{' '}
//           <span 
//             className="text-indigo-600 font-bold cursor-pointer hover:underline" 
//             onClick={() => navigate('/registro')}
//           >
//             Regístrate
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState, useContext } from 'react'; 
import { CartContext } from '../src/CartContext'; 
import { useNavigate } from 'react-router-dom';

export default function Login() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validación de campos vacíos
    if (email.trim() === '' || password.trim() === '') {
      setError('Por favor completa todos los campos');
      return;
    }

    // 2. Recuperar datos registrados desde localStorage
    const storedData = JSON.parse(localStorage.getItem('userData'));

    // 3. Verificación de credenciales
    if (!storedData || email !== storedData.email || password !== storedData.password) {
      setError('Correo o contraseña incorrectos');
      return;
    }

    // 4. Si todo coincide
    setError('');
    const datosDelUsuario = { name: 'Usuario Frida', email: email };
    login(datosDelUsuario);
    
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center py-20 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Bienvenido de nuevo</h2>
        <p className="text-gray-500 mb-8">Ingresa tus datos para continuar</p>

        {/* Mensaje de error mejorado */}
        {error && <p className="text-red-500 text-sm mb-4 font-bold bg-red-50 p-2 rounded-lg text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input 
              type="email" 
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input 
              type="password" 
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full cursor-pointer bg-gray-900 text-white p-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          ¿Aún no tienes cuenta?{' '}
          <span 
            className="text-indigo-600 font-bold cursor-pointer  cursor-pointer hover:underline" 
            onClick={() => navigate('/registro')}
          >
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
}