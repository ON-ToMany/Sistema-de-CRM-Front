import React from 'react'

import { useEffect, useState, type ChangeEvent} from 'react'
import { usuarioCadastrar } from '../../services/Service'
import { useNavigate, Link } from 'react-router-dom' // Adicionei o Link para navegação
import type Usuario from '../../models/Usuario'
import { ToastAlerta } from '../../utils/ToastAlerta'
import { ClipLoader } from "react-spinners";

export default function CadastrarUsuario() {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    senha: "",
    email: "", 
    foto: "",
    tipo: "",
    cpf: ""
  })

  const [isloading, setIsloading] = useState<boolean>(false)
  const [confirmarSenha, setConfirmarSenha] = useState<string>("") // Inicializado vazio

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  const retornarLogin = () => {
    navigate("/login")
  }

  useEffect(() => {
    if (usuario.id !== 0) {
      retornarLogin()
    }
  }, [usuario])

  const handleSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(e.target.value)
  }

  async function CadastroDeUsuario(e:ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    
    setIsloading(true)
    if (usuario.senha === confirmarSenha && usuario.senha.length >= 8) {
      try {
        await usuarioCadastrar("/usuarios/cadastrar", usuario, setUsuario)
        ToastAlerta("Usuário cadastrado com sucesso!", 'success')
        retornarLogin()
      } catch (error: any) {
        console.log(error)
        ToastAlerta("Erro ao cadastrar usuário", 'error')
      } finally {
        setIsloading(false)
      }
    } else {
      ToastAlerta("Senhas inconsistentes ou menores que 8 caracteres", 'error')
      setUsuario({ ...usuario, senha: '' })
      setConfirmarSenha('')
      setIsloading(false) 
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EAECEE]">
      <h1 className='text-xl font-bold text-[#000000] mb-4'>Cadastre-se</h1>
      

      <form 
        onSubmit={CadastroDeUsuario} 
        className='bg-[#bacbbf] p-8 rounded-[58px] border border-gray-400 w-full max-w-sm flex flex-col gap-3 shadow-lg'
      >
        
        <div className="flex flex-col">
          <label htmlFor="nome" className='text-[#0D542B] font-bold mb-1 ml-2'>Nome</label>
          <input 
          
            type="text" 
            name="nome"
            value={usuario.nome} 
            className=' bg-white w-full h-10 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B]' 
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="cpf" className='text-[#0D542B] font-bold mb-1 ml-2'>CPF</label>
          <input 
            type="text" 
            name="cpf"
            value={usuario.cpf} 
            className='w-full bg-white h-10 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B]' 
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="tipo" className='text-[#0D542B] font-bold mb-1 ml-2'>Tipo</label>
          <select   
            name="tipo"
            className='w-full bg-white h-10 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B] bg-white'
            value={usuario.tipo} 
            onChange={atualizarEstado}
            required
          >
            <option value="" disabled>Selecione</option>
            <option value="cliente">Cliente</option>
            <option value="empresa">Empresa</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="usuario" className='text-[#0D542B] font-bold mb-1 ml-2'>Email</label>
          <input 
            type="email" 
            name="usuario" 
            className='w-full bg-white h-10 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B]' 
            value={usuario.email} 
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="senha" className='text-[#0D542B] font-bold mb-1 ml-2'>Senha</label>
          <input 
            type="password" 
            name="senha"
            value={usuario.senha} 
            className='w-full bg-white h-10 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B]' 
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="confirmarSenha" className='text-[#0D542B] font-bold mb-1 ml-2'>Confirmar Senha</label>
          <input 
            type="password" 
            name="confirmarSenha"
            value={confirmarSenha} 
            className='w-full h-10  bg-white rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B]' 
            onChange={handleSenha}
            required
          />
        </div>

        <button 
          type="submit" 
          className='bg-[#135A33] cursor-pointer text-white font-bold py-3 rounded-full hover:bg-[#0a3d20] transition-colors flex justify-center items-center'
          disabled={isloading}
        >
          {isloading ? <ClipLoader size={43}/> : 'Entrar'}
        </button>
      </form>
      <p className="mt-4 text-black font-medium">
        Já possui conta? <Link to="/login" className="text-[#0D542B] font-bold hover:underline">Entre aqui</Link>
      </p>
    </div>
  )
}