import Tabela from '../../../components/tabela/Tabela';
import iconeCO2 from "../../../assets/simbolo CO2.png.png";
import iconeRecicle from "../../../assets/simbolo recicle.png";
import ContainerDashboard from '../../../components/containerdashboard/ContainerDashboard';

function DashboardEmpresa() {
  return (
      <ContainerDashboard nome='empresa' tipo='empresa'>
        
          <section className="bg-[#E4EBE4]/60 p-6 rounded-[35px] border border-[#B5BEB5]">
            <h2 className="text-lg text-[#1A3321] font-bold mb-4 text-left">
              Oportunidades ativas (pendente + processando)
            </h2>
            <Tabela statusFixo={["Pendente", "Processando"]} />
          </section>

          <section className="bg-[#E4EBE4]/60 p-6 rounded-[35px] border border-[#B5BEB5]">
            <h2 className="text-lg text-[#1A3321] font-bold mb-4 text-left">Finalizadas</h2>
            <Tabela statusFixo={["Finalizado"]} />
          </section>
          
          <section className="w-full mt-4">
            <div className="relative flex items-center mb-8">
              <div className="grow border-t border-[#B5BEB5]"></div>
              <span className="shrink mx-4 text-[#1A3321] text-xl font-bold uppercase tracking-widest">
                Impacto
              </span>
              <div className="grow border-t border-[#B5BEB5]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#E4EBE4]/80 border border-[#B5BEB5] rounded-[35px] p-6 flex flex-col items-center shadow-sm">
                <div className="flex items-center gap-3 mb-2 w-full justify-center">
                  <img src={iconeCO2} alt="Folha" className="w-10 h-10 object-contain" />
                  <span className="text-[15px] text-[#1A3321] font-bold uppercase leading-none">
                    CO₂ <br />
                    <span className="font-normal lowercase">evitado</span>
                  </span>
                </div>
                <div className="text-[#1A3321] flex items-baseline">
                  <span className="text-5xl font-black">3,0</span>
                  <span className="text-xl font-bold ml-1 uppercase">kg</span>
                </div>
              </div>

              <div className="bg-[#E4EBE4]/80 border border-[#B5BEB5] rounded-[35px] p-6 flex flex-col items-center shadow-sm">
                <div className="flex items-center gap-3 mb-2 w-full justify-center">
                  <img src={iconeRecicle} alt="Recicle" className="w-10 h-10 object-contain" />
                  <span className="text-[15px] text-[#1A3321] font-bold uppercase leading-none">
                    Reciclados <br />
                    <span className="font-normal lowercase">total</span>
                  </span>
                </div>
                <div className="text-[#1A3321] text-center">
                  <span className="text-5xl font-black">10</span>
                  <p className="text-sm font-medium text-[#4A6D55] mt-1">Equipamentos</p>
                </div>
              </div>

              <div className="bg-[#E4EBE4]/80 border border-[#B5BEB5] rounded-[35px] p-6 flex flex-col items-center shadow-sm">
                <div className="flex items-center gap-3 mb-2 w-full justify-center">
                  <img src={iconeRecicle} alt="Reuso" className="w-10 h-10 object-contain" />
                  <span className="text-[15px] text-[#1A3321] font-bold uppercase leading-none">
                    Reusos <br />
                    <span className="font-normal lowercase">total</span>
                  </span>
                </div>
                <div className="text-[#1A3321] text-center">
                  <span className="text-5xl font-black">10</span>
                  <p className="text-sm font-medium text-[#4A6D55] mt-1">Equipamentos</p>
                </div>
              </div>
            </div>
          </section>
      </ContainerDashboard>
    );
};

export default DashboardEmpresa;