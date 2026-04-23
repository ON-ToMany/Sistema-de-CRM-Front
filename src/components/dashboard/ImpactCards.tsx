import React from 'react';
import { Leaf, Recycle } from 'lucide-react';

interface ImpactCardsProps {
  co2: number;
  reciclados: number;
  reusos: number;
}

const ImpactCards: React.FC<ImpactCardsProps> = ({ co2, reciclados, reusos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-[#DCE4E0] rounded-[40px] p-8 border border-[#0D542B] flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="text-[#0D542B] w-8 h-8" strokeWidth={2.5} />
          <div className="text-[#0D542B] text-2xl font-bold">
            CO₂ <span className="text-xl font-normal text-[#1F2937]">evitado</span>
          </div>
        </div>
        <div className="text-7xl font-bold text-[#1F2937] flex items-baseline">
          {(co2 || 0).toLocaleString('pt-BR', { minimumFractionDigits: 1 })}<span className="text-3xl ml-1 font-normal text-[#1F2937]">kg</span>
        </div>
      </div>

      <div className="bg-[#DCE4E0] rounded-[40px] p-8 border border-[#0D542B] flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Recycle className="text-[#0D542B] w-8 h-8" strokeWidth={2.5} />
          <div className="text-[#0D542B] text-2xl font-bold">
            Reciclados <span className="text-xl font-normal text-[#1F2937]">total</span>
          </div>
        </div>
        <div className="text-7xl font-bold text-[#1F2937]">
          {reciclados || 0}
        </div>
        <div className="text-2xl font-normal text-[#1F2937] mt-1">Equipamentos</div>
      </div>

      <div className="bg-[#DCE4E0] rounded-[40px] p-8 border border-[#0D542B] flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Recycle className="text-[#0D542B] w-8 h-8" strokeWidth={2.5} />
          <div className="text-[#0D542B] text-2xl font-bold">
            Reusos <span className="text-xl font-normal text-[#1F2937]">total</span>
          </div>
        </div>
        <div className="text-7xl font-bold text-[#1F2937]">
          {reusos || 0}
        </div>
        <div className="text-2xl font-normal text-[#1F2937] mt-1">Equipamentos</div>
      </div>
    </div>
  );
};

export default ImpactCards;
