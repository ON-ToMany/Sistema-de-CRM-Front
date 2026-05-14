import Tabela from "../../tabela/Tabela"

function OportunidadesAtivas() {
  return (
    <div className="min-w-0 bg-gray-100/50 p-4 md:p-6 rounded-[35px] border border-green-800 shadow-sm">
        <h2 className="text-center md:text-left text-lg md:text-2xl text-gray-900 font-bold mb-4">
            Oportunidades ativas (pendente + processando)
        </h2>

        <p className="text-xs text-gray-500 my-3 sm:hidden">
          Toque em uma linha para ver os detalhes
        </p>

        <Tabela statusFixo={["pendente", "processando"]} />
    </div>
  )
}

export default OportunidadesAtivas