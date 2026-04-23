import React from 'react';
import { Leaf, Recycle } from 'lucide-react';

interface ImpactCardsProps {
  co2: number;
  reciclados: number;
  reusos: number;
}

const ImpactCards: React.FC<ImpactCardsProps> = ({ co2, reciclados, reusos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* CO2 Card */}
      <div className="bg-[#E4EBE5] rounded-[40px] p-8 border border-[#B3C6B9] flex flex-col items-center text-center shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="text-[#135A33] w-12 h-12" />
          <span className="text-[#135A33] text-2xl font-bold">CO₂ <span className="text-lg font-normal text-gray-600">evitado</span></span>
        </div>
        <div className="text-6xl font-bold text-gray-800 mb-2">
          {co2.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}<span className="text-3xl ml-1">kg</span>
        </div>
      </div>

      {/* Reciclados Card */}
      <div className="bg-[#E4EBE5] rounded-[40px] p-8 border border-[#B3C6B9] flex flex-col items-center text-center shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Recycle className="text-[#135A33] w-12 h-12" />
          <span className="text-[#135A33] text-2xl font-bold">Reciclados <span className="text-lg font-normal text-gray-600">total</span></span>
        </div>
        <div className="text-6xl font-bold text-gray-800">
          {reciclados}
        </div>
        <div className="text-2xl text-gray-600 mt-2">Equipamentos</div>
      </div>

      {/* Reusos Card */}
      <div className="bg-[#E4EBE5] rounded-[40px] p-8 border border-[#B3C6B9] flex flex-col items-center text-center shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Recycle className="text-[#135A33] w-12 h-12" />
          <span className="text-[#135A33] text-2xl font-bold">Reusos <span className="text-lg font-normal text-gray-600">total</span></span>
        </div>
        <div className="text-6xl font-bold text-gray-800">
          {reusos}
        </div>
        <div className="text-2xl text-gray-600 mt-2">Equipamentos</div>
      </div>
    </div>
  );
};

export default ImpactCards;
