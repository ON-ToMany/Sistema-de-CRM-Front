import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import type { Oportunidade } from '../../models/Oportunidade';
import { ClipLoader } from 'react-spinners';
import { ToastAlerta } from '../../utils/ToastAlerta';
import ContainerDashboard from '../../components/dashboard/containerdashboard/ContainerDashboard';

function Dashboard() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { usuario, handleLogout } = useContext(AuthContext);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;

      if (!usuario.token || usuario.token === '') {
        ToastAlerta('Você precisa estar logado!', 'info');
      } else {
        fetchOportunidades();
      }
    }
  }, [usuario.token]);

  async function fetchOportunidades() {
    setIsLoading(true);

    const tokenFormatado = usuario.token.startsWith('Bearer ')
      ? usuario.token
      : `Bearer ${usuario.token}`;

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

   if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">

        <ClipLoader size={50} color="#135A33" />
        <p className='text-green-900'>Carregando Dados</p>
      </div>
    );
  }

  return (
    <ContainerDashboard oportunidades={oportunidades} />
  )
}

export default Dashboard