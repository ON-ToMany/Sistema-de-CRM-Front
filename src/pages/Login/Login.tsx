import {useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react"
import { Login } from "../../services/Service"
import type UsuarioLogin from "../../models/UsuarioLogin"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from '../../utils/ToastAlerta'
import { useNavigate } from "react-router-dom"

export default function LoginUsuario() {

const[usuarioLogin,setUsuarioLogin]= useState<UsuarioLogin>({} as UsuarioLogin)
const[isloading,setIsloading]=useState<boolean>(false)
  const { usuario, handleLogin } = useContext(AuthContext);

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setUsuarioLogin({ ...usuario, [e.target.name]: e.target.value })
  }
const navigate = useNavigate()




  useEffect(() => {
    if (usuario.token !== '') {
      navigate("/login");
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
  setIsloading(false)
}

}


  return (
    <div>
      


    </div>
  )
}
