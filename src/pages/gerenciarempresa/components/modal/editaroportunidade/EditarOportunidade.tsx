import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

interface EditarOportunidadeForm {
  nomeEquipamento: string;
  categoria: string;
  status: string;
}

interface EditarOportunidadeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: EditarOportunidadeForm) => void;
  initialData?: Partial<EditarOportunidadeForm>;
}

export function EditarOportunidadeModal({
  isOpen,
  onClose,
  onSave,
  initialData = {},
}: EditarOportunidadeModalProps) {
  const [form, setForm] = useState<EditarOportunidadeForm>({
    nomeEquipamento: "",
    categoria: "",
    status: "",
  });

  useEffect(() => {
    setForm({
      nomeEquipamento: initialData.nomeEquipamento ?? "",
      categoria: initialData.categoria ?? "",
      status: initialData.status ?? "",
    });
  }, [initialData]);

  if (!isOpen) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSave() {
    if (!form.nomeEquipamento || !form.categoria || !form.status) {
      alert("Preencha todos os campos");
      return;
    }

    onSave(form);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-green-800/20 rounded-2xl shadow-xl w-full max-w-xs p-6 backdrop-blur-xl border border-green-900">
        
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Editar Oportunidade
          </h2>

          <button
            onClick={onClose}
            className="text-gray-800 hover:text-gray-900 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <RiCloseCircleLine size={30} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-900">
              Nome do equipamento
            </label>
            <input
              type="text"
              name="nomeEquipamento"
              value={form.nomeEquipamento}
              onChange={handleChange}
              className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-900">
              Categoria
            </label>
            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
            >
              <option value="">Selecione</option>
              <option value="reuso">Reuso</option>
              <option value="reciclagem">Reciclagem</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-900">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
            >
              <option value="">Selecione</option>
              <option value="Pendente">Pendente</option>
              <option value="Processando">Processando</option>
              <option value="Finalizado">Finalizado</option>
            </select>
          </div>

          <button
            onClick={handleSave}
            className="mt-6 w-full bg-green-800 hover:bg-green-950 text-gray-100 text-sm font-medium py-2.5 rounded-full transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}