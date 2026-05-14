import { RiCloseCircleLine } from "react-icons/ri";
import type { Oportunidade } from "../../../models/Oportunidade";
import { Tag } from "../../tag/Tag";

interface OportunidadeModalProps {
  isOpen: boolean;
  onClose: () => void;
  oportunidade: Oportunidade | null;
}

function OportunidadeModal({ isOpen, onClose, oportunidade }: OportunidadeModalProps) {
  if (!isOpen || !oportunidade) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-gray-100/50 rounded-2xl shadow-xl w-full max-w-xs p-6 backdrop-blur-xl border border-green-900">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-gray-900">Oportunidade</h2>
          <button
            onClick={onClose}
            className="text-gray-800 hover:text-gray-900 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <RiCloseCircleLine size={30} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Equipamento</span>
            <p className="text-sm text-gray-900 mt-0.5">{oportunidade.equipamento}</p>
          </div>

          <div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Categoria</span>
            <p className="text-sm text-gray-900 mt-0.5 capitalize">{oportunidade.categoria}</p>
          </div>

          <div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Status</span>
            <div className="mt-1">
              <Tag status={oportunidade.status} />
            </div>
          </div>

          <div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Peso</span>
            <p className="text-sm text-gray-900 mt-0.5">{oportunidade.peso} kg</p>
          </div>

          <div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Valor de Conservação</span>
            <p className="text-sm text-gray-900 mt-0.5">
              {oportunidade.valorConservacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>

          {oportunidade.estadoConservacao && (
            <div>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Estado de Conservação</span>
              <p className="text-sm text-gray-900 mt-0.5">{oportunidade.estadoConservacao}</p>
            </div>
          )}

          {oportunidade.co2Economizado !== undefined && (
            <div>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">CO₂ Economizado</span>
              <p className="text-sm text-gray-900 mt-0.5">{oportunidade.co2Economizado} kg</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OportunidadeModal;