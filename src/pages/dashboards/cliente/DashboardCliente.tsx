import { useContext, useEffect, useState } from 'react';
import ImpactCards from '../../../components/impactcards/impactCards';
import OpportunityTable from '../../../components/oportunidade/Opportunity';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import type { Oportunidade } from '../../../models/Oportunidade';
import { ClipLoader } from 'react-spinners';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import ContainerDashboard from '../../../components/containerdashboard/ContainerDashboard';

function DashboardCliente() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { usuario, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    if (!usuario.access_token || usuario.access_token === '') {
      ToastAlerta('Você precisa estar logado!', 'info');
    } else {
      fetchOportunidades();
    }
  }, [usuario.access_token]);

  async function fetchOportunidades() {
    setIsLoading(true);

    const tokenFormatado = usuario.access_token.startsWith('Bearer ')
      ? usuario.access_token
      : `Bearer ${usuario.access_token}`;

    try {
      await buscar('/oportunidades/todas', setOportunidades, {
        headers: { Authorization: tokenFormatado },
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

  const ativas = oportunidades.filter(
    (op) => op.status?.toLowerCase() === 'pendente' || op.status?.toLowerCase() === 'processando'
  );

  const finalizadas = oportunidades.filter(
    (op) => op.status?.toLowerCase() === 'finalizado'
  );

  const co2Total = oportunidades.reduce((acc, curr) => acc + (curr.co2Economizado || 0), 0);
  const recicladosTotal = oportunidades.filter((op) => op.categoria?.toLowerCase() === 'reciclado').length;
  const reusosTotal = oportunidades.filter((op) => op.categoria?.toLowerCase() === 'reutilizado').length;

  return (
    <ContainerDashboard nome='cliente' tipo='cliente'>
      
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
    </ContainerDashboard>
  );
};

export default DashboardCliente;