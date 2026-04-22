import { useState } from "react"
import { Login } from "../../services/Service"
import type UsuarioLogin from "../../models/UsuárioLogin"

export default function LoginUsuario() {

const[usuario,setUsuario]= useState<UsuarioLogin>({} as UsuarioLogin)
const[isloading,setIsloading]=useState<boolean>(false)

async function logar (){
try {
setIsloading(true)
await Login("/auth/login",usuario,setUsuario)

} catch (error:any) {
    console.error(error)
}
}


  return (
    <div>
      


    </div>
  )
}
