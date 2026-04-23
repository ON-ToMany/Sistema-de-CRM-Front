import React from 'react';
import type { Oportunidade } from '../../models/Oportunidade';

interface OpportunityTableProps {
  title: string;
  opportunities: Oportunidade[];
  showImpact?: boolean;
}

const OpportunityTable: React.FC<OpportunityTableProps> = ({ title, opportunities, showImpact = false }) => {
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
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

  return (
    <div className="bg-[#E4EBE5] rounded-[40px] p-8 border border-[#B3C6B9] shadow-sm mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[#135A33] font-semibold border-b border-[#B3C6B9]">
              <th className="pb-4">Oportunidade</th>
              {showImpact && <th className="pb-4 text-center">CO2 Reduzido</th>}
              {showImpact && <th className="pb-4 text-center">Estado de conservação</th>}
              <th className="pb-4 text-center">Categoria</th>
              <th className="pb-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#B3C6B9]/50">
            {opportunities.length === 0 ? (
              <tr>
                <td colSpan={showImpact ? 5 : 3} className="py-8 text-center text-gray-500 italic">
                  Nenhuma oportunidade encontrada.
                </td>
              </tr>
            ) : (
              opportunities.map((op) => (
                <tr key={op.id} className="text-gray-700 hover:bg-white/30 transition-colors">
                  <td className="py-4 font-medium">{op.equipamento}</td>
                  {showImpact && (
                    <td className="py-4 text-center">
                      {op.co2Economizado ? `${op.co2Economizado.toFixed(2)}kg` : '-'}
                    </td>
                  )}
                  {showImpact && <td className="py-4 text-center">{op.estadoConservacao || 'bom'}</td>}
                  <td className="py-4 text-center capitalize">{op.categoria || 'reuso'}</td>
                  <td className="py-4 text-center">
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle(op.status)}`}>
                      {op.status === 'processando' ? 'Em Processo' : op.status.charAt(0).toUpperCase() + op.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpportunityTable;
