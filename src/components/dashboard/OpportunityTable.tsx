import React from 'react';
import type { Oportunidade } from '../../models/Oportunidade';

interface OpportunityTableProps {
  title: string;
  opportunities: Oportunidade[];
  showImpact?: boolean;
  titleClassName?: string;
}

const OpportunityTable: React.FC<OpportunityTableProps> = ({ title, opportunities, showImpact = false, titleClassName }) => {
  const getStatusStyle = (status: string) => {
    const s = (status || '').toLowerCase();
    if (s.includes('pendente')) {
      return 'border border-gray-400 text-gray-500 bg-gray-300';
    }
    if (s.includes('processo') || s.includes('processando')) {
      return 'border border-amber-500 text-amber-600 bg-amber-100';
    }
    if (s.includes('finalizado')) {
      return 'border border-green-600 text-green-700 bg-green-200';
    }
    return 'border border-gray-300 text-gray-400 bg-gray-200/50';
  };

  return (
    <div className="bg-[#DCE4E0] rounded-[20px] md:rounded-[30px] p-4 md:p-6 px-4 md:px-8 border border-[#0D542B] shadow-none mb-4 md:mb-6">
      <h2 className={`font-bold text-[#1F2937] mb-4 md:mb-6 text-sm md:text-xl ${titleClassName || ''}`}>{title}</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[#0D542B] font-semibold border-b border-[#0D542B]/30 text-xs md:text-base">
              <th className="pb-2 md:pb-3 text-left">Oportunidade</th>
              {showImpact && <th className="pb-2 md:pb-3 text-center">CO2 Reduzido</th>}
              {showImpact && <th className="pb-2 md:pb-3 text-center">Estado de conservação</th>}
              <th className="pb-2 md:pb-3 text-center">Categoria</th>
              <th className="pb-2 md:pb-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {(opportunities || []).length === 0 ? (
              <tr>
                <td colSpan={showImpact ? 5 : 3} className="py-8 text-center text-gray-500 italic">
                  Nenhuma oportunidade encontrada.
                </td>
              </tr>
            ) : (
              (opportunities || []).map((op) => (
                <tr key={op?.id} className="text-[#374151] hover:bg-white/40 transition-colors text-xs md:text-base">
                  <td className="py-2 md:py-4 font-bold">{op?.equipamento}</td>
                  {showImpact && (
                    <td className="py-2 md:py-4 text-center font-bold">
                      {op?.co2Economizado ? `${op.co2Economizado.toFixed(2).replace('.', ',')}kg` : '-'}
                    </td>
                  )}
                  {showImpact && <td className="py-2 md:py-4 text-center font-bold">{op?.estadoConservacao || 'bom'}</td>}
                  <td className="py-2 md:py-4 text-center font-bold capitalize">{op?.categoria || 'reuso'}</td>
                  <td className="py-2 md:py-4 text-right">
                    <span className={`px-2 py-0.5 md:px-4 md:py-1 rounded-full text-[10px] md:text-sm font-bold min-w-[70px] md:min-w-[110px] text-center inline-block ${getStatusStyle(op?.status)}`}>
                      {(op?.status || '').toLowerCase().includes('processo') ? 'Em Processo' : (op?.status ? op.status.charAt(0).toUpperCase() + op.status.slice(1) : '-')}
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
