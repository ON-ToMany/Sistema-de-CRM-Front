import { createContext, useRef, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { ToastAlerta } from "../utils/ToastAlerta";
import { Login } from "../services/Service";

interface AuthContextProps {
  usuario: UsuarioLogin
  handleLogout(): void
  handleLogin(usuario: UsuarioLogin): Promise<void>
  isLoading: boolean
  isLogout: boolean
  setUsuario: Dispatch<SetStateAction<UsuarioLogin>>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    access_token: ""
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isLogout = useRef(false)

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {

     const resposta =  await Login('/auth/login', usuarioLogin, setUsuario);
      ToastAlerta('Usuário autenticado com sucesso!', 'sucesso');
      isLogout.current = false;
      localStorage.setItem('usuario',resposta.access_token)

    } catch (error) {
      console.log(error);
      ToastAlerta('Os dados do Usuário estão inconsistentes!', 'erro');
    }
    setIsLoading(false);
  }

  function handleLogout() {
    isLogout.current = true
    setUsuario({
      id: 0,
      nome: "",
      email: "",
      senha: "",
      foto: "",
      access_token: ""
    })
  }

  return (
    <AuthContext.Provider value={{
      usuario,
      handleLogin,
      handleLogout,
      isLoading,
      isLogout: isLogout.current,
      setUsuario
    }}>
      {children}
    </AuthContext.Provider>
  )
}