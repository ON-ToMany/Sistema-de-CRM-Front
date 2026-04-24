import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import HeaderDashboard from '../../components/headerdashboard/HeaderDashboard';
import ImpactCards from '../../components/dashboard/impactCards';
import OpportunityTable from '../../components/dashboard/Opportunity';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import type { Oportunidade } from '../../models/Oportunidade';
import { ClipLoader } from 'react-spinners';
import { ToastAlerta } from '../../utils/ToastAlerta';

const Dashboard: React.FC = () => {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { usuario, handleLogout } = useContext(AuthContext);

useEffect(() => {
  if (!usuario?.access_token) {  
    ToastAlerta('Você precisa estar logado!', 'info');
    return;
  }
  fetchOportunidades();
}, [usuario]);

  async function fetchOportunidades() {
    setIsLoading(true);
    try {
      await buscar('/oportunidades/todas', setOportunidades, {
        headers: { 
          Authorization: `Bearer ${usuario.access_token}` 
        },
      });
    } catch (error: any) {
      if (error.toString().includes('401')) {
        ToastAlerta('Sessão expirada. Faça login novamente.', 'info');
        handleLogout();
      } else {
        ToastAlerta('Erro ao carregar dados do dashboard', 'erro');
      }
    } finally {
      setIsLoading(false);
    }
  }

  const ativas = (oportunidades || []).filter(
    (op) => op.status?.toLowerCase() === 'pendente' || op.status?.toLowerCase() === 'processando'
  );

  const finalizadas = (oportunidades || []).filter(
    (op) => op.status?.toLowerCase() === 'finalizado'
  );

  const co2Total = (oportunidades || []).reduce((acc, curr) => acc + (curr.co2Economizado || 0), 0);
  const recicladosTotal = (oportunidades || []).filter((op) => op.categoria?.toLowerCase() === 'reciclado').length;
  const reusosTotal = (oportunidades || []).filter((op) => op.categoria?.toLowerCase() === 'reutilizado').length;

  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
      <Sidebar />
      <main className="flex-1 ml-64 p-10 overflow-y-auto">
        <HeaderDashboard />
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader size={50} color="#135A33" />
          </div>
        ) : (
          <div className="space-y-12">
            <section>
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
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impacto</h2>
              <ImpactCards
                co2={co2Total}
                reciclados={recicladosTotal}
                reusos={reusosTotal}
              />
            </section>
            <section className="pt-10">
              <OpportunityTable
                title="Todas oportunidades"
                opportunities={oportunidades}
                showImpact={true}
              />
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;