

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Registro() {
//   const [nombre, setNombre] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
    
//     // 1. Validación de campos vacíos
//     if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
//       setError('Por favor, completa todos los campos');
//       return;
//     }

//     // 2. Validación: ¿Las contraseñas coinciden?
//     if (password !== confirmPassword) {
//       setError('Las contraseñas no coinciden');
//       return;
//     }

//     // 3. Validación: Longitud mínima de seguridad
//     if (password.length < 6) {
//       setError('La contraseña debe tener al menos 6 caracteres');
//       return;
//     }

//     // Si todo está correcto, limpiamos errores y procesamos
//     setError('');
//     console.log("Registrando a:", { nombre, email });
    
//     // Redirección tras registro exitoso
//     navigate('/login');
//   };

//   return (
//     <div className="flex justify-center items-center py-20 px-4">
//       <form 
//         onSubmit={handleRegister} 
//         className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-gray-900">Crear cuenta</h2>

//         {/* Mensaje de error */}
//         {error && (
//           <p className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 font-semibold border border-red-200">
//             {error}
//           </p>
//         )}

//         {/* Nombre */}
//         <input 
//           type="text" 
//           placeholder="Nombre completo" 
//           className="w-full p-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />

//         {/* Email */}
//         <input 
//           type="email" 
//           placeholder="Correo electrónico" 
//           className="w-full p-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         {/* Contraseña */}
//         <input 
//           type="password" 
//           placeholder="Contraseña" 
//           className="w-full p-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* Confirmar Contraseña */}
//         <input 
//           type="password" 
//           placeholder="Confirmar contraseña" 
//           className="w-full p-3 mb-6 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />

//         {/* Botón */}
//         <button 
//           type="submit" 
//           className="w-full bg-indigo-600 text-white p-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg"
//         >
//           Registrarse
//         </button>

//         {/* Navegación a Login */}
//         <p className="mt-6 text-sm text-gray-600 text-center">
//           ¿Ya tienes cuenta?{' '}
//           <span 
//             className="text-indigo-600 font-bold cursor-pointer hover:underline" 
//             onClick={() => navigate('/login')}
//           >
//             Inicia Sesión
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // 1. Validar que no haya campos vacíos
    if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // 2. Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // 3. Validar longitud mínima
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    // En tu componente Registro, al registrar:
const userData = { email, password };
localStorage.setItem('userData', JSON.stringify(userData));

    // Si todo es correcto
    setError('');
    console.log("Registrando a:", { nombre, email });
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center py-20 px-4">
      <form 
        onSubmit={handleRegister} 
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Crear cuenta</h2>

        {/* Mostrar errores */}
        {error && (
          <p className="text-red-500 text-sm mb-4 font-bold bg-red-50 p-2 rounded-lg text-center">
            {error}
          </p>
        )}

        <input 
          type="text" 
          placeholder="Nombre completo" 
          className="w-full p-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input 
          type="email" 
          placeholder="Correo electrónico" 
          className="w-full p-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Contraseña" 
          className="w-full p-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Confirmar contraseña" 
          /* Aquí el borde se vuelve rojo si las contraseñas no coinciden */
          className={`w-full p-3 mb-6 border rounded-xl focus:outline-none focus:ring-2 ${
            confirmPassword !== '' && password !== confirmPassword 
              ? 'border-red-500 ring-2 ring-red-200' 
              : 'border-gray-200 focus:ring-indigo-500'
          }`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white p-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
        >
          Registrarse
        </button>

        <p className="mt-4 text-sm text-gray-600 text-center">
          ¿Ya tienes cuenta?{' '}
          <span 
            className="text-indigo-600 font-bold cursor-pointer hover:underline" 
            onClick={() => navigate('/login')}
          >
            Inicia Sesión
          </span>
        </p>
      </form>
    </div>
  );
}