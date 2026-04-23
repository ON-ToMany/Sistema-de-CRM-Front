import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Perfil() {
  const navigate = useNavigate()
  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta('Você precisa estar logado', 'erro')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto mt-8 rounded-3xl overflow-hidden shadow-2xl bg-white mb-10'>
      <div className='w-full h-72 bg-linear-to-r from-[#2D6A4F] to-[#52B788] border-b-8 border-white' />
      
      <img 
        src={usuario.foto || "https://i.imgur.com/8RK9k6O.png"} 
        alt={`Foto de perfil de ${usuario.nome}`} 
        className='rounded-full w-56 h-56 mx-auto -mt-32 border-8 border-white relative z-10 object-cover shadow-md' 
      />
      
      <div className='relative -mt-16 h-80 flex flex-col bg-[#f8f9fa] text-[#1B4332] items-center justify-center pt-16'>
        <h2 className='text-4xl font-bold mb-2'>{usuario.nome}</h2>
        <p className='text-xl text-gray-600 mb-6'>{usuario.usuario}</p>
        
        <div className='px-4 py-1 bg-[#D8F3DC] text-[#2D6A4F] rounded-full text-sm font-bold uppercase tracking-wider'>
            Membro OneToMany
        </div>

        <div className='mt-8 w-full border-t border-gray-200 flex justify-center gap-10 p-4'>
            <div className='text-center'>
                <p className='text-gray-400 text-sm'>ID do Consultor</p>
                <p className='font-bold'>#00{usuario.id}</p>
            </div>
            <div className='text-center border-l border-gray-200 pl-10'>
                <p className='text-gray-400 text-sm'>Ecosystem</p>
                <p className='font-bold text-[#2D6A4F]'>Greentech CRM</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil