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

    const estadoInicial: UsuarioLogin = {
      id: 0,
      nome: "",
      email: "",
      senha: "",
      tipo: '',
      access_token: ""
    }

    const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
      const usuarioPersistido = localStorage.getItem('usuarioToken');
      return usuarioPersistido ? JSON.parse(usuarioPersistido) : estadoInicial;
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isLogout = useRef(false);

    useEffect(() => {
      if (usuario.access_token !== "") {
        localStorage.setItem('usuarioToken', JSON.stringify(usuario));
      }
    }, [usuario]);

    async function handleLogin(usuarioLogin: UsuarioLogin) {
      setIsLoading(true);
      try {
        const resposta = await Login('/auth/login', usuarioLogin, () => {});
        
        console.log('Campos da resposta:', Object.keys(resposta))

        setUsuario({
          id: resposta.id,
          nome: resposta.nome,
          email: resposta.email,
          senha: '',  
          tipo: resposta.tipo,        
          access_token: resposta.token  // ✅ corrigido: era resposta.access_token
        });

        ToastAlerta('Usuário autenticado com sucesso!', 'sucesso');
        isLogout.current = false;
      } catch (error) {
        ToastAlerta('Os dados do Usuário estão inconsistentes!', 'erro');
      }
      setIsLoading(false);
    }

    function handleLogout() {
      isLogout.current = true;
      localStorage.removeItem('usuarioToken');
      setUsuario(estadoInicial);
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