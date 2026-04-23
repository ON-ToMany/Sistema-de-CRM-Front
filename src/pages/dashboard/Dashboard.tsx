import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import ImpactCards from '../../components/dashboard/ImpactCards';
import OpportunityTable from '../../components/dashboard/OpportunityTable';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import type { Oportunidade } from '../../models/Oportunidade';
import { ClipLoader } from 'react-spinners';
import { ToastAlerta } from '../../utils/ToastAlerta';
import { Menu } from 'lucide-react';
import logoEscritaCrm from '../../assets/img/logoescrita-crm.png';

const Dashboard: React.FC = () => {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { usuario, handleLogout, setUsuario } = useContext(AuthContext);

  useEffect(() => {
    const tokenSalvo = localStorage.getItem('usuario');

    if (usuario.access_token === '') {
      if (tokenSalvo) {
        setUsuario({ ...usuario, access_token: tokenSalvo });
      } else {
        ToastAlerta('Você precisa estar logado!', 'info');
        navigate('/login');
      }
    } else {
      fetchOportunidades();
    }
  }, [usuario.access_token, navigate, setUsuario]);

  async function fetchOportunidades() {
    setIsLoading(true);
    try {
      const token = usuario.access_token.startsWith('Bearer ')
        ? usuario.access_token
        : `Bearer ${usuario.access_token}`;

      await buscar('/oportunidades/todas', setOportunidades, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.response?.status === 401) {
        ToastAlerta('Sessão expirada. Por favor, faça login novamente.', 'info');
        handleLogout();
      } else {
        ToastAlerta('Erro ao carregar dados do dashboard', 'erro');
      }
    } finally {
      setIsLoading(false);
    }
  }

  const ativas = (oportunidades || []).filter(
    (op) => {
      const status = op?.status?.toLowerCase() || '';
      return status === 'pendente' ||
        status === 'processando' ||
        status === 'em processo';
    }
  );

  const finalizadas = (oportunidades || []).filter(
    (op) => op?.status?.toLowerCase() === 'finalizado'
  );

  const co2Total = (oportunidades || []).reduce((acc, curr) => acc + (curr?.co2Economizado || 0), 0);

  const recicladosTotal = (oportunidades || []).filter(
    (op) => op?.categoria?.toLowerCase()?.includes('recicla')
  ).length;

  const reusosTotal = (oportunidades || []).filter(
    (op) => op?.categoria?.toLowerCase()?.includes('reutiliza') || op?.categoria?.toLowerCase()?.includes('reuso')
  ).length;

  return (
    <div className="fixed inset-0 z-[60] flex bg-[#EAECEE] overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 md:ml-56 flex flex-col overflow-y-auto h-screen w-full">
        <div className="md:hidden flex items-center justify-between bg-[#C4D1C9] border-b border-[#0D542B] rounded-b-[40px] px-6 py-4 shadow-sm z-10 relative">
          <img src={logoEscritaCrm} alt="Greentech CRM Logo" className="h-8 w-auto object-contain" />
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-[#0D542B]">
            <Menu className="w-8 h-8" strokeWidth={3} />
          </button>
        </div>

        <div className="p-4 md:p-8 flex-1 flex flex-col h-auto">
          <div className="w-full h-auto bg-[#C4D1C9] rounded-[40px] md:rounded-[50px] border border-[#0D542B] p-6 md:p-10 shadow-inner flex-1 flex flex-col">

            <div className="mb-6 md:mb-10 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-2">
                Olá, {usuario.nome || 'Cliente'}!
              </h1>
              <p className="text-[#6A6C6A] text-sm md:text-lg font-medium leading-tight md:leading-normal">
                Acompanhe aqui o processo de descarte<br className="md:hidden" /> do seu equipamento e seu impacto.
              </p>
              <hr className="mt-4 md:mt-6 border-t border-[#0D542B]" />
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center flex-1">
                <ClipLoader size={50} color="#0D542B" />
              </div>
            ) : location.pathname.endsWith('/listar') ? (
              <div className="flex-1">
                <OpportunityTable
                  title="Todas oportunidades"
                  titleClassName="text-4xl"
                  opportunities={oportunidades}
                  showImpact={true}
                />
              </div>
            ) : (
              <div className="space-y-10 flex-1">

                <section className="mb-8 lg:mb-0">
                  <OpportunityTable
                    title="Oportunidades ativas (pendente + processando)"
                    opportunities={ativas}
                  />
                </section>

                <section>
                  <OpportunityTable
                    title="Finalizadas"
                    opportunities={finalizadas}
                  />
                </section>

                <section className="pt-2 pb-4">
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-3xl font-bold text-[#1F2937] whitespace-nowrap">Impacto</h2>
                    <div className="h-[1px] bg-[#0D542B] w-full mt-2"></div>
                  </div>

                  <ImpactCards
                    co2={co2Total}
                    reciclados={recicladosTotal}
                    reusos={reusosTotal}
                  />
                </section>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
