import Tabela from "../../components/tabela/Tabela"
import ContainerDashboard from "../../components/dashboard/containerdashboard/ContainerDashboard"

function GerenciarOportunidades() {
  return (
    <>
      <ContainerDashboard oportunidades={[]}>
        
        <div className="min-w-0 flex flex-col gap-3.5 bg-gray-100/50 p-4 md:p-6 rounded-[35px] border border-green-800 shadow-sm">
          <h2 className="text-center md:text-left text-lg sm:text-2xl text-gray-900 font-bold">Gerencie Oportunidades</h2>
          <Tabela mostrarEditar />
        </div>
      </ContainerDashboard>
    </>
  )
}

export default GerenciarOportunidades