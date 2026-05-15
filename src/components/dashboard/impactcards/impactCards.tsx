import { MdOutlineRecycling } from "react-icons/md";
import type { Oportunidade } from '../../../models/Oportunidade';
import { RiLeafFill, RiLoopLeftLine } from 'react-icons/ri';

interface ImpactCardsProps {
  oportunidades: Oportunidade[];
}

function ImpactCards({ oportunidades }: ImpactCardsProps) {
  const finalizadas = oportunidades.filter(
    (op) => op.status?.toLowerCase() === 'finalizado'
  );

  const co2Total = finalizadas.reduce((acc, curr) => acc + (curr.co2Economizado || 0), 0);
  const recicladosTotal = finalizadas.filter(
    (op) => op.categoria?.toLowerCase() === 'reciclado'
  ).length;
  const reusosTotal = finalizadas.filter(
    (op) => op.categoria?.toLowerCase() === 'reutilizado'
  ).length;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-gray-100/50 rounded-[40px] border border-green-800 flex flex-col items-center justify-center text-center gap-4 p-2 md:p-4 shadow-sm">
        <p className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
          {co2Total.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}
          <span className="text-3xl ml-1">kg</span>
        </p>
       
        <div className="flex items-center justify-center gap-2 mb-4">
          <RiLeafFill className="text-green-800 w-10 h-10" />
          
          <p className="text-green-800 text-xl font-bold">
            CO₂ <span className="text-sm font-normal text-gray-600">evitado</span>
          </p>
        </div>
      </div>

      <div className="bg-gray-100/50 rounded-[40px] border border-green-800 flex flex-col items-center justify-center text-center gap-4 p-2 md:p-4 shadow-sm">
        <div>
          <p className="text-5xl md:text-6xl font-bold text-gray-800">{recicladosTotal}</p>
          <p className="text-sm font-normal text-gray-600">Equipamentos</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <MdOutlineRecycling className="text-green-800 w-10 h-10" />
          <p className="text-green-800 text-xl font-bold">Reciclados</p>
        </div>
      </div>

      <div className="bg-gray-100/50 rounded-[40px] border border-green-800 flex flex-col items-center justify-center text-center gap-4 p-2 md:p-4 shadow-sm">
        <div>
          <p className="text-5xl md:text-6xl font-bold text-gray-800">{reusosTotal}</p>
          <p className="text-sm text-gray-600 mt-2">Equipamentos</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <RiLoopLeftLine className="text-green-800 w-10 h-10" />
          <p className="text-green-800 text-xl font-bold">Reusos</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCards;