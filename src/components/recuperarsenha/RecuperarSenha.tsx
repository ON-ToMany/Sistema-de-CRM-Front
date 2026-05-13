import { useState } from "react"
import { Link } from "react-router-dom"
import { RiArrowLeftLine, RiMailLine, RiCheckLine } from "react-icons/ri"
import Logo from "../../assets/icons/logoescrita-crm.png"

export default function RecuperarSenha() {
  const [email, setEmail] = useState("")
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    // Integrar com o backend quando a rota estiver pronta
    setEnviado(true)
  }

  return (
    <div className="min-h-screen bg-[#EAECEE] flex flex-col lg:flex-row">

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10">

        <div className="w-full max-w-sm mb-6 flex items-center justify-between">
          <Link
            to="/Login"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#0D542B] transition-colors cursor-pointer"
          >
            <RiArrowLeftLine />
            Voltar ao login
          </Link>
          <div className="flex lg:hidden items-center">
            <img src={Logo} alt="GreenTech CRM" className="h-7 object-contain" />
          </div>
        </div>

        {!enviado ? (
          <>
            <div className="w-full max-w-sm mb-7">
              <div className="bg-green-100 border border-green-300 rounded-full p-3 w-fit mb-4">
                <RiMailLine className="text-[#0D542B] text-2xl" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Recuperar senha</h1>
              <p className="text-sm text-gray-500 leading-snug">
                Informe seu e-mail cadastrado e enviaremos um link para redefinir sua senha.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-bold text-[#0D542B] ml-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  required
                  className="w-full h-11 rounded-full px-4 outline-none focus:ring-2 focus:ring-[#0D542B] bg-white border border-gray-300 text-sm"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full h-12 rounded-full bg-[#135A33] text-white font-bold hover:bg-[#0a3d20] active:scale-[0.98] transition-all mt-1"
              >
                Enviar link de recuperação
              </button>
            </form>
          </>
        ) : (
          <div className="w-full max-w-sm flex flex-col items-center text-center gap-4">
            <div className="bg-green-100 border border-green-300 rounded-full p-4">
              <RiCheckLine className="text-[#0D542B] text-3xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">E-mail enviado!</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Enviamos um link de recuperação para <span className="font-semibold text-gray-700">{email}</span>. Verifique sua caixa de entrada.
            </p>
            <button
              onClick={() => setEnviado(false)}
              className="text-sm text-[#0D542B] font-semibold hover:underline cursor-pointer mt-2"
            >
              Tentar com outro e-mail
            </button>
          </div>
        )}

        <p className="mt-8 text-sm font-medium text-gray-700">
          Lembrou a senha?{" "}
          <Link to="/Login" className="text-[#0D542B] font-bold hover:underline">
            Faça login
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