  import {useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react"

  import type UsuarioLogin from "../../models/UsuarioLogin"
  import { AuthContext } from "../../contexts/AuthContext"
 
  import { Link, useNavigate } from "react-router-dom"


  export default function LoginUsuario() {

  const[usuarioLogin,setUsuarioLogin]= useState<UsuarioLogin>({} as UsuarioLogin)
  const[isloading,setIsloading]=useState<boolean>(false)
    const { usuario, handleLogin } = useContext(AuthContext);

    const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
      setUsuarioLogin({ ...usuarioLogin, [e.target.name]: e.target.value })
    }
  const navigate = useNavigate()  




    useEffect(() => {
      if (usuario.token !== '') {
        navigate("/");
      }
    }, [usuario, navigate]);




  async function logar (e: SyntheticEvent<HTMLFormElement>){
        e.preventDefault();
      setIsloading(true);
  try {

  await handleLogin(usuarioLogin)


  } catch (error:any) {
    if(error)
      console.error(error)

  }finally{
   setIsloading(false);
  }

  }

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EAECEE]">
      

      <p className="font-bold text-center text-gray-800 max-w-100px mb-6 text-[18px] leading-tight">
        Acesse sua conta para acompanhar ou gerenciar o processo de descarte de seu equipamento.
      </p>


      <form onSubmit={logar} 
        className="bg-[#bacbbf] p-8 rounded-[30px] border border-gray-400 w-full max-w-sm flex flex-col shadow-lg"
      >
    
        <div className="flex flex-col mb-4">
          <label htmlFor="usuario" className="text-[#0D542B] font-bold mb-1 ml-2">Usuário</label>
          <input 
            type="text" 
            id="usuario"
            name="usuario" 
            value={usuarioLogin.usuario}
            className="w-full h-10 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B] bg-white" 
             onChange={(e:ChangeEvent<HTMLInputElement>)=>atualizarEstado(e)} 
          />
        </div>


        <div className="flex flex-col mb-6">
          <label htmlFor="senha" className="text-[#0D542B] font-bold mb-1 ml-2">Senha</label>
          <input 
            type="password" 
            id="senha"
            name="senha"
            value={usuarioLogin.senha}
            className="w-full h-10 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B] bg-white"
            onChange={(e:ChangeEvent<HTMLInputElement>)=>atualizarEstado(e)} 
          />
        </div>


        <button 
          type="submit" 
          className=" cursor-pointer  w-full h-12 rounded-full bg-[#135A33] text-white font-bold hover:bg-[#0a3d20] transition-colors"
        >
          Entrar
        </button>

      </form>

      <p className="mt-6 font-medium text-black">
        Não possui conta? <Link to="/cadastrar" className="text-[#0D542B] font-bold hover:underline">Cadastre-se aqui</Link>
      </p>

    </div>
  )
  }
