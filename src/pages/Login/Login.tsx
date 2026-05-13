import { useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react"
import type UsuarioLogin from "../../models/UsuarioLogin"
import { AuthContext } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { RiArrowLeftLine, RiEyeLine, RiEyeOffLine, RiUserLine, RiBuildingLine } from "react-icons/ri"
import Logo from "../../assets/icons/logoescrita-crm.png"

export default function LoginUsuario() {

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)
  const [isloading, setIsloading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false)
  const { usuario, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate()

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setUsuarioLogin({ ...usuarioLogin, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (usuario.access_token !== '') {
      if (usuario.tipo === 'empresa') {
        navigate("/dashboard-empresa");
      } else if (usuario.tipo === 'cliente') {
        navigate("/dashboard-cliente");
      } else {
        navigate("/");
      }
    }
  }, [usuario, navigate]);

  async function logar(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsloading(true);
    try {
      await handleLogin(usuarioLogin)
    } catch (error: any) {
      if (error) console.error(error)
    } finally {
      setIsloading(false);
    }
  }

  const preencherDemo = (usuario: string, senha: string) => {
    setUsuarioLogin((prev) => ({ ...prev, usuario, senha }))
  }

  return (
    <div className="min-h-screen bg-[#EAECEE] flex flex-col lg:flex-row">

      <div className="hidden lg:flex lg:w-[45%] bg-[#0D542B] flex-col justify-between p-12 relative overflow-hidden shrink-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 -right-10 w-40 h-40 rounded-full bg-white/5" />

        <div className="relative z-10">
          <img src={Logo} alt="GreenTech CRM" className="h-10 object-contain brightness-0 invert" />
        </div>

        <div className="relative z-10">
          <h2 className="text-white text-4xl font-bold leading-tight mb-5">
            Gestão inteligente para um futuro sustentável.
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Acompanhe e gerencie o descarte responsável de equipamentos eletrônicos de forma simples e transparente.
          </p>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/70 text-xs font-medium">Sistema ativo e seguro</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10">

        <div className="w-full max-w-sm mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#0D542B] transition-colors cursor-pointer"
          >
            <RiArrowLeftLine />
            Voltar
          </Link>
          <div className="flex lg:hidden items-center">
            <img src={Logo} alt="GreenTech CRM" className="h-7 object-contain" />
          </div>
        </div>

        <div className="w-full max-w-sm mb-7">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Acesse sua conta</h1>
          <p className="text-sm text-gray-500 leading-snug">
            Acompanhe ou gerencie o processo de descarte do seu equipamento.
          </p>
        </div>

        <form onSubmit={logar} className="w-full max-w-sm flex flex-col gap-4">

          <div className="flex flex-col gap-1.5">
            <label htmlFor="usuario" className="text-sm font-bold text-[#0D542B] ml-1">
              Usuário ou e-mail
            </label>
            <input
              type="text"
              id="usuario"
              name="email"
              value={usuarioLogin.usuario}
              placeholder="Digite seu usuario"
              className="w-full h-11 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B] bg-white border border-gray-300 text-sm"
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="senha" className="text-sm font-bold text-[#0D542B] ml-1">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                value={usuarioLogin.senha ?? ''}
                className="w-full h-11 rounded-full px-4 pr-11 outline-none focus:ring-2 focus:ring-[#0D542B] bg-white border border-gray-300 text-sm"
                onChange={atualizarEstado}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0D542B] transition-colors cursor-pointer"
              >
                {showPassword ? <RiEyeOffLine className="text-lg" /> : <RiEyeLine className="text-lg" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full h-12 rounded-full bg-green-900 text-white font-bold hover:bg-green-800 active:scale-[0.98] transition-all mt-1"
          >
            {isloading ? 'Entrando...' : 'Entrar'}
          </button>
                  <p className="mt-5 text-sm font-medium text-gray-700">
          Esqueceu a Senha?{" "}
          <Link to="/recuperar-senha" className="text-[#0D542B] font-bold hover:underline">
            Recuperar Senha
          </Link>
        </p>
        </form>

        <div className="mt-5 w-full max-w-sm bg-white/70 border border-gray-300 rounded-2xl px-5 py-4">
          <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-3">
            Acesso rápido — Demo
          </p>
          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => preencherDemo("cliente@c.com", "12345678")}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#0D542B] transition-colors cursor-pointer text-left group"
            >
              <div className="bg-green-50 border border-green-200 rounded-full p-1.5 shrink-0 group-hover:bg-green-100 transition-colors">
                <RiUserLine className="text-[#0D542B] text-sm" />
              </div>
              <span>
                <span className="font-semibold text-gray-800">cliente@c.com</span>
                <span className="text-gray-400"> · Cliente</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => preencherDemo("empresa@demo.com", "12345678")}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#0D542B] transition-colors cursor-pointer text-left group"
            >
              <div className="bg-green-50 border border-green-200 rounded-full p-1.5 shrink-0 group-hover:bg-green-100 transition-colors">
                <RiBuildingLine className="text-[#0D542B] text-sm" />
              </div>
              <span>
                <span className="font-semibold text-gray-800">empresa@demo.com</span>
                <span className="text-gray-400"> · Empresa</span>
              </span>
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-3">
            Clique em um perfil para preencher automaticamente. Senha: <span className="font-semibold">12345678</span>
          </p>
        </div>

        <p className="mt-5 text-sm font-medium text-gray-700">
          Quer ser nosso parceiro?{" "}
          <Link to="/parceria" className="text-[#0D542B] font-bold hover:underline">
            Cadastre sua empresa
          </Link>
        </p>

        <p className="text-xs text-gray-400 text-center mt-10">
          © 2026 GreenTech · Todos os direitos reservados ·{" "}
          <span className="font-medium">One to Many</span>
        </p>

      </div>
    </div>
  )
}