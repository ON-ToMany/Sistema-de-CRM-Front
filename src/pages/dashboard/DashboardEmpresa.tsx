import { useContext, useEffect } from 'react';
import type { FC } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { RiHome2Line, RiAddFill } from "react-icons/ri";
import Tabela from '../gerenciarempresa/components/tabela/Tabela';
import Logo from "../../assets/logo GreenTech.png";
import iconeCO2 from "../../assets/simbolo CO2.png.png";
import iconeRecicle from "../../assets/simbolo recicle.png";

const DashboardEmpresa: FC = () => {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (usuario.token === "") {
    //   navigate('/login');
    // }
  }, [usuario.token, navigate]);
return (
    <div className="flex flex-row h-screen bg-[#E9ECEF] w-full overflow-hidden font-sans">
      <aside className="group w-20 hover:w-64 h-full bg-[#E4EBE4] border-r border-[#0D542B] flex flex-col p-6 shadow-sm rounded-tr-[50px] rounded-br-[50px] z-10 transition-all duration-500 ease-in-out overflow-hidden">
        
        <div className="flex flex-row items-center gap-4 mb-16 w-full h-18 px-2">
          <img src={Logo} alt="Logo" className="h-14 w-14 object-contain shrink-0 
          transition-transform duration-300 group-hover:scale-110" />
          <div className="flex flex-col leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xl font-bold text-[#1A3321]">Greentech</span>
            <span className="text-xl font-medium text-[#0D542B]">CRM</span>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-8 text-[#0D542B] font-bold">
          <button 
            onClick={() => navigate('/home')} 
            className="flex items-center gap-4 hover:opacity-70 transition-opacity text-lg min-w-50 text-left"
          >
            <RiHome2Line size={28} className="shrink-0" /> 
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Inicio</span>
          </button>
          
          <button 
            onClick={() => navigate('/cadastrarproduto')} 
            className="flex items-center gap-4 hover:opacity-70 transition-opacity text-lg min-w-50 text-left"
          >
            <RiAddFill size={28} className="shrink-0" /> 
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Gerenciar</span>
          </button>

          <button 
            onClick={() => navigate('/produtos')} 
            className="flex items-center gap-4 hover:opacity-70 transition-opacity text-lg min-w-50 text-left"
          >
            <RiAddFill size={28} className="shrink-0" /> 
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Listar Todos</span>
          </button>
        </nav>

        <button
          onClick={() => navigate('/login')}
          className="w-12 group-hover:w-32 h-10 bg-[#0D542B] text-white rounded-full font-bold text-xs mt-auto self-center uppercase tracking-wider hover:bg-green-900 transition-all duration-300 flex items-center justify-center overflow-hidden"
        >
          <span className="group-hover:inline hidden">SAIR</span>
          <span className="group-hover:hidden inline">X</span>
        </button>
      </aside>

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