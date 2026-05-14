import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import type { Oportunidade } from '../../models/Oportunidade';
import { ClipLoader } from 'react-spinners';
import { ToastAlerta } from '../../utils/ToastAlerta';
import ContainerDashboard from '../../components/dashboard/containerdashboard/ContainerDashboard';
import Tabela from '../../components/tabela/Tabela';

function Historico() {
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
        fetchTodasOportunidades();
      }
    }
  }, [usuario.token]);

  async function fetchTodasOportunidades() {
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
        ToastAlerta('Erro ao carregar oportunidades.', 'erro');
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader size={50} color="#135A33" />
      </div>
    );
  }

  return (
    <ContainerDashboard oportunidades={oportunidades}>
      <div className="min-w-0 flex flex-col gap-3.5 bg-gray-100/50 p-4 md:p-6 rounded-[35px] border border-green-800 shadow-sm">
        <h2 className="text-center md:text-left text-lg md:text-2xl text-gray-900 font-bold mb-4">
            Histórico de Oportunidades
        </h2>

        <p className="text-xs text-gray-500 my-3 sm:hidden">
          Toque em uma linha para ver os detalhes
        </p>

        <Tabela mostrarDeletar />
      </div>
    </ContainerDashboard>
  );
};

export default Historico;
