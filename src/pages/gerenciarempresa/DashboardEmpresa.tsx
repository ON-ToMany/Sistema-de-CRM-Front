import type { FC } from 'react';
import Tabela from './components/tabela/Tabela';
import iconeCO2 from "../../assets/simbolo CO2.png.png";
import iconeRecicle from "../../assets/simbolo recicle.png";

const DashboardEmpresa: FC = () => {

return (
    <div className="flex flex-row h-screen bg-[#E9ECEF] w-full overflow-hidden font-sans">

      <main className="flex-1 h-full overflow-y-auto p-8 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-6 bg-[#CBD5CB] rounded-[40px] p-8 border border-[#B5BEB5] shadow-md self-start">
          <header className="border-b border-[#B5BEB5] pb-4 text-left">
            <h2 className="text-[#1A3321] text-3xl font-bold">Olá, Empresa Exemplo!</h2>
            <p className="text-[#4A6D55] mt-1 text-sm">
              Acompanhe aqui o processo de descarte do seu equipamento e seu impacto.
            </p>
          </header>

          <section className="bg-[#E4EBE4]/60 p-6 rounded-[35px] border border-[#B5BEB5]">
            <h2 className="text-lg text-[#1A3321] font-bold mb-4 text-left">
              Oportunidades ativas (pendente + processando)
            </h2>
            
            <div className="[&_tr:has(span:contains('Finalizado'))]:hidden">
               <Tabela />
            </div>
          </section>

          <section className="bg-[#E4EBE4]/60 p-6 rounded-[35px] border border-[#B5BEB5]">
            <h2 className="text-lg text-[#1A3321] font-bold mb-4 text-left">Finalizadas</h2>
            
            <div className="[&_tr:not(:has(span:contains('Finalizado')))]:hidden [&_thead]:table-header-group [&_tr:first-child]:table-row">
               <Tabela />
            </div>
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
        </div>
      </main>
    </div>
  );
};

export default DashboardEmpresa;