import { useContext, useState, type ChangeEvent, type SyntheticEvent } from 'react'
import type { Oportunidade } from '../../../models/Oportunidade'
import { cadastrar } from '../../../services/Service'
import { AuthContext } from '../../../contexts/AuthContext'
import { ToastAlerta } from '../../../utils/ToastAlerta'

function FormCadastrar() {
    const [isloading, setIsloading] = useState<boolean>(false)
    const [oportunidade, setOportunidade] = useState<Oportunidade>({} as Oportunidade)
    const { handleLogout, usuario } = useContext(AuthContext)
    const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {setOportunidade({ ...oportunidade, [e.target.name]: e.target.value })}

    async function cadastrarOportunidade(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()
        
        const token = usuario.token
        if (!token || token === "") {
            ToastAlerta("Sessão expirada. Faça login novamente.", "info")
            handleLogout()
            return 
        }
        const tokenFormatado = token.startsWith('Bearer ') ? token : `Bearer ${token}`

        try {
            setIsloading(true)
            await cadastrar("oportunidades/cadastrar", oportunidade, setOportunidade, {
                headers: {
                Authorization: tokenFormatado
                }
            })
            ToastAlerta("Oportunidade cadastrada com sucesso!", "sucesso")
            setOportunidade({} as Oportunidade)

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
                ToastAlerta("Sessão expirada. Faça login novamente.", "info")
            } else {
                ToastAlerta("Erro ao cadastrar oportunidade", "erro")
            }
        } finally {
            setIsloading(false)
        }
    }

    return (    
        <div className='bg-gray-100/50 rounded-[30px]  p-4 md:p-10 border border-green-800 w-full max-w-2xl mx-auto'>
            <h2 className='text-lg text-center md:text-left md:text-2xl font-bold text-gray-900 mb-6'>Cadastre uma nova oportunidade</h2>
          
            <form onSubmit={cadastrarOportunidade} className='flex flex-col gap-5'>
                <div className="flex flex-col">
                    <label htmlFor="equipamento" className='text-green-800 font-bold mb-1 ml-2'>Nome do Equipamento</label>
                    <input
                        type="text"
                        name="equipamento" 
                        placeholder='Digite o nome do equipamento'
                        value={oportunidade.equipamento || ''}
                        className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
                        onChange={atualizarEstado}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="peso" className='text-green-800 font-bold mb-1 ml-2'>Peso</label>
                    <input
                        type="number"
                        step="any"
                        name="peso" 
                        placeholder='Digite o peso do equipamento'
                        value={oportunidade.peso || ''}
                        className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
                        onChange={(e) => setOportunidade({ ...oportunidade, peso: parseFloat(e.target.value) })}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="valorConservacao" className='text-green-800 font-bold mb-1 ml-2 leading-none'>Valor da conservação <span className='text-red-800 text-xs md:text-sm font-medium'>(1 a 3 para ruim, 4 a 6 para bom, 7 a 10 para ótimo)</span></label>
                    <input
                        type="number"
                        name="valorConservacao" 
                        placeholder='Digite o valor da conservação (1 a 10)'
                        value={oportunidade.valorConservacao || ''}
                        className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
                        onChange={(e) => setOportunidade({ ...oportunidade, valorConservacao: parseInt(e.target.value) })}
                        required
                    />
                </div>

                <button
                type="submit"
                className='w-full mt-6 cursor-pointer bg-green-800 text-white font-bold py-3 rounded-full hover:bg-green-900 transition-colors flex justify-center items-center shadow-md'
                disabled={isloading}
                >
                    {isloading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    ) 
}

export default FormCadastrar