import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


function Perfil() {
  const { usuario } = useContext(AuthContext);

  return (
    <div className='flex justify-center py-10 bg-gray-100 min-h-screen'>
      <div className='w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div className='h-48 bg-linear-to-r from-green-600 to-green-400'></div>
        
        <div className='flex flex-col items-center -mt-24 p-8'>
          <img 
            src={usuario.foto || "https://i.imgur.com/8RK9k6O.png"} 
            alt="Foto de Perfil" 
            className='w-48 h-48 rounded-full border-8 border-white shadow-lg object-cover'
          />
          
          <h2 className='text-3xl font-bold text-gray-800 mt-4'>{usuario.nome}</h2>
          <p className='text-gray-500 mb-6'>{usuario.usuario}</p>

          <div className='w-full border-t border-gray-100 pt-6 flex justify-around'>
            <div className='text-center'>
                <p className='text-sm text-gray-400 uppercase tracking-widest'>ID Usuário</p>
                <p className='font-bold text-gray-700'>#00{usuario.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Perfil;