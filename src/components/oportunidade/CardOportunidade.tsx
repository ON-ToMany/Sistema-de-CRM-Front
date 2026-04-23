import { useContext, useState, type ChangeEvent, type SyntheticEvent, } from 'react'
import type { Oportunidade } from '../../models/Oportunidade'
import { ClipLoader } from 'react-spinners'
import { cadastrar } from '../../services/Service'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

export default function CardOportunidade() {
  const [isloading, setIsloading] = useState<boolean>(false)
  const [oportunidade, setOportunidade] = useState<Oportunidade>({} as Oportunidade)
  const { usuario, handleLogout } = useContext(AuthContext)

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setOportunidade({ ...oportunidade, [e.target.name]: e.target.value })
  }

  async function cadastrarOportunidade(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault() 
    

    try {
      setIsloading(true)
      await cadastrar("oportunidades/cadastrar", oportunidade, setOportunidade, {
        headers: usuario.token
      })
      ToastAlerta("Oportunidade cadastrada com sucesso!", "success")
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
        ToastAlerta("Usuário deve estar logado", "erro")
      } else {
        ToastAlerta("Erro ao cadastrar oportunidade", "erro")
      }
    } finally {
      setIsloading(false)
    }
  }

  return (
  
    <div className='flex justify-center items-center w-full min-h-screen bg-white p-4'>

     
      <div className='bg-[#E4EBE5] w-full max-w-4xl rounded-[40px] p-8 md:p-12 shadow-sm'>
        

        <h1 className='text-2xl font-bold text-gray-800'>Olá, Cliente Exemplo!</h1>
        <p className='text-gray-600 mt-1 mb-6'>Acompanhe aqui o processo de descarte do seu equipamento e seu impacto.</p>
        <hr className='border-t-2 border-[#B3C6B9] mb-8' />


        <div className='bg-[#EFEFF180] rounded-[30px] p-8 md:p-10 border border-[#B3C6B9] w-full max-w-2xl mx-auto'>
          
          <h2 className='text-xl font-bold text-gray-900 mb-6'>Cadastre uma nova oportunidade</h2>
          
          <form onSubmit={cadastrarOportunidade} className='flex flex-col gap-5'>
          
            <div className="flex flex-col">
              <label htmlFor="equipamento" className='text-[#0D542B] font-bold mb-1 ml-2'>Nome do equipamento</label>
              <input
                type="text"
                name="equipamento" 
                value={oportunidade.equipamento || ''}
                className='bg-white w-full h-11 rounded-full px-5 outline-none focus:ring-2 focus:ring-[#0D542B]'
                onChange={atualizarEstado}
                required
              />
            </div>

       
            <div className="flex flex-col">
              <label htmlFor="peso" className='text-[#0D542B] font-bold mb-1 ml-2'>Peso</label>
              <input
                type="text"
                name="peso" 
                value={oportunidade.peso || ''}
                className='bg-white w-full h-11 rounded-full px-5 outline-none focus:ring-2 focus:ring-[#0D542B]'
                onChange={atualizarEstado}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="valorConservacao" className='text-[#0D542B] font-bold mb-1 ml-2'>Valor da conservação (1 a 10)</label>
              <input
                type="text"
                name="valorConservacao" 
                value={oportunidade.valorConservacao || ''}
                className='bg-white w-full h-11 rounded-full px-5 outline-none focus:ring-2 focus:ring-[#0D542B]'
                onChange={atualizarEstado}
                required
              />
            </div>

          
            <button
              type="submit"
              className='w-full mt-6 cursor-pointer bg-[#135A33] text-white font-bold py-3 rounded-full hover:bg-[#0a3d20] transition-colors flex justify-center items-center shadow-md'
              disabled={isloading}
            >
              {isloading ? <ClipLoader size={24} color="#ffffff" /> : 'CADASTRAR'}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}