import { RiCloseCircleLine } from "react-icons/ri";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmDeleteModal({ isOpen, onClose, onConfirm }: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-green-800/20 rounded-2xl shadow-xl w-full max-w-xs p-6 backdrop-blur-xl border border-green-900">
        
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-gray-900">Deletar</h2>
          <button
            onClick={onClose}
            className="text-gray-800 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <RiCloseCircleLine size={30} />
          </button>
        </div>

        <p className="text-gray-800 text-sm mb-6">
          Tem certeza que deseja deletar esta oportunidade? Esta ação não pode ser desfeita.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2.5 rounded-full transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={() => { onConfirm(); onClose(); }}
            className="flex-1 bg-red-800 hover:bg-red-900 text-gray-100 text-sm font-medium py-2.5 rounded-full transition-colors"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}