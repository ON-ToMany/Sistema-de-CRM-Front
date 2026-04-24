import Tabela from "./components/tabela/Tabela"

function GerenciarEmpresa() {
  return (
    <>
      <div className="mx-4 sm:mx-20">
        <div className="p-5 sm:p-10 w-full my-10 sm:my-40 bg-green-950/20 border border-green-800 rounded-2xl sm:rounded-4xl shadow-sm flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 text-2xl sm:text-4xl font-bold">Olá, Gerenciar Empresa!</h1>
            <p className="text-gray-900 text-sm sm:text-xl">Acompanhe aqui o processo de descarte do seu equipamento e seu impacto.</p>
          </div>

          <hr className="text-green-900" />

          <div className="flex flex-col gap-6 sm:gap-8 bg-gray-50/40 p-4 sm:p-8 rounded-2xl sm:rounded-4xl mt-4 border border-green-900">
            <h2 className="text-xl sm:text-2xl text-gray-900 font-semibold">Gerencie Oportunidades</h2>
            <Tabela />
          </div>
        </div>
      </div>
    </>
  )
}

export default GerenciarEmpresa