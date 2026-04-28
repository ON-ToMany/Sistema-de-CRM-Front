import Tabela from "../../../components/tabela/Tabela"
import ContainerDashboard from "../../../components/containerdashboard/ContainerDashboard"

function GerenciarEmpresa() {
  return (
    <>
      <ContainerDashboard nome='empresa' tipo='empresa'>
        
        <div className="flex flex-col gap-6 sm:gap-8 bg-gray-50/40 p-4 sm:p-8 rounded-2xl sm:rounded-4xl mt-4 border border-green-900">
          <h2 className="text-xl sm:text-2xl text-gray-900 font-semibold">Gerencie Oportunidades</h2>
          <Tabela />
        </div>
      </ContainerDashboard>
    </>
  )
}

export default GerenciarEmpresa