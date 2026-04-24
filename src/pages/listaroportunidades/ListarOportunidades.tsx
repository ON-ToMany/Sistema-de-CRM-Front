import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import type { Oportunidade } from '../../models/Oportunidade';
import { ClipLoader } from 'react-spinners';
import { ToastAlerta } from '../../utils/ToastAlerta';

const ListarOportunidades: React.FC = () => {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { usuario, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    if (!usuario.access_token || usuario.access_token === '') {
      ToastAlerta('Você precisa estar logado!', 'info');
    } else {
      fetchTodasOportunidades();
    }
  }, [usuario.access_token]);

  async function fetchTodasOportunidades() {
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
        ToastAlerta('Erro ao carregar oportunidades.', 'erro');
      }
    } finally {
      setIsLoading(false);
    }
  }

  const getStatusStyle = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'pendente':
        return 'bg-[#D1D5DB] text-gray-700';
      case 'processando':
      case 'em processo':
        return 'bg-[#FDE68A] text-[#92400E] border border-[#F59E0B]';
      case 'finalizado':
        return 'bg-[#D1FAE5] text-[#065F46] border border-[#10B981]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const formatStatus = (status: string) => {
    if (!status) return '-';
    if (status.toLowerCase() === 'processando') return 'Em Processo';
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
      <Sidebar />
      <main className="flex-1 ml-64 p-10 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Todas as Oportunidades</h1>
          <p className="text-gray-500 mt-1">Listagem completa de todas as oportunidades cadastradas.</p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader size={50} color="#135A33" />
          </div>
        ) : (
          <div className="bg-[#E4EBE5] rounded-[40px] p-8 border border-[#B3C6B9] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[#135A33] font-semibold border-b border-[#B3C6B9]">
                    <th className="pb-4">Oportunidade</th>
                    <th className="pb-4 text-center">Peso (kg)</th>
                    <th className="pb-4 text-center">CO2 Reduzido</th>
                    <th className="pb-4 text-center">Estado de Conservação</th>
                    <th className="pb-4 text-center">Categoria</th>
                    <th className="pb-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#B3C6B9]/50">
                  {oportunidades.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-500 italic">
                        Nenhuma oportunidade encontrada.
                      </td>
                    </tr>
                  ) : (
                    oportunidades.map((op) => (
                      <tr key={op.id} className="text-gray-700 hover:bg-white/30 transition-colors">
                        <td className="py-4 font-medium">{op.equipamento}</td>
                        <td className="py-4 text-center">{op.peso ?? '-'}</td>
                        <td className="py-4 text-center">
                          {op.co2Economizado ? `${op.co2Economizado.toFixed(2)}kg` : '-'}
                        </td>
                        <td className="py-4 text-center">{op.estadoConservacao || '-'}</td>
                        <td className="py-4 text-center capitalize">{op.categoria || '-'}</td>
                        <td className="py-4 text-center">
                          <span className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle(op.status)}`}>
                            {formatStatus(op.status)}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {oportunidades.length > 0 && (
              <p className="text-right text-sm text-gray-500 mt-4">
                Total: <span className="font-semibold text-[#135A33]">{oportunidades.length}</span> oportunidade(s)
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ListarOportunidades;
