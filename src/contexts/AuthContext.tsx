import { createContext, useRef, useState, useEffect, type ReactNode, type Dispatch, type SetStateAction } from "react";
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

  // 1. Inicializa tentando ler o que já foi salvo anteriormente
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const usuarioPersistido = localStorage.getItem('usuarioToken');
    return usuarioPersistido ? JSON.parse(usuarioPersistido) : {
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    };
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isLogout = useRef(false);

  // 2. Salva automaticamente sempre que o usuário logar
  useEffect(() => {
    if (usuario.token !== "") {
      localStorage.setItem('usuarioToken', JSON.stringify(usuario));
    }
  }, [usuario]);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      // CORREÇÃO: '/auth/login' (estava 'auht')
      await Login('/auth/login', usuarioLogin, setUsuario);

      ToastAlerta('Usuário autenticado com sucesso!', 'sucesso');
      isLogout.current = false;

    } catch (error) {
      console.log(error);
      ToastAlerta('Os dados do Usuário estão inconsistentes!', 'erro');
    }
    setIsLoading(false);
  }
function handleLogout() {
    isLogout.current = true;
    localStorage.removeItem('usuarioToken'); // Limpa a memória ao sair
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
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