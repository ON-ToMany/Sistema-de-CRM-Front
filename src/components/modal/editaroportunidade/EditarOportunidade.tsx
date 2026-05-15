import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import type { Categoria } from "../../../models/Oportunidade";
import type { Status } from "../../tag/Tag";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface EditarOportunidadeForm {
  nomeEquipamento: string;
  categoria: Categoria;
  status: Status;
}

interface EditarOportunidadeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: EditarOportunidadeForm) => Promise<void>;
  initialData?: Partial<EditarOportunidadeForm>;
}

export function EditarOportunidadeModal({ isOpen, onClose, onSave, initialData = {} }: EditarOportunidadeModalProps) {
  const [form, setForm] = useState<{
    nomeEquipamento: string;
    categoria: Categoria | "";
    status: Status | "";
  }>({
    nomeEquipamento: "",
    categoria: "",
    status: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setForm({
      nomeEquipamento: initialData.nomeEquipamento ?? "",
      categoria: initialData.categoria ?? "",
      status: initialData.status ?? "",
    });
  }, [initialData]);

  if (!isOpen) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    } as typeof prev));
  }

  async function handleSave() {
    if (!form.nomeEquipamento || !form.categoria || !form.status) {
      ToastAlerta("Preencha todos os campos", "info");
      return;
    }

    setIsSaving(true);
    await onSave(form as EditarOportunidadeForm);
    setIsSaving(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-gray-100/50 rounded-2xl shadow-xl w-full max-w-xs p-6 backdrop-blur-xl border border-green-900">
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
            <label className="font-medium text-sm text-gray-900">Nome do equipamento</label>
            <input
              type="text"
              name="nomeEquipamento"
              placeholder="Digite o nome do Equipamento"
              value={form.nomeEquipamento}
              onChange={handleChange}
              className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-900">Categoria</label>
            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
            >
              <option value="">Selecione</option>
              <option value="indefinido">Indefinido</option>
              <option value="reciclado">Reciclado</option>
              <option value="reutilizado">Reutilizado</option>
              <option value="descartado">Descartado</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-900">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="rounded-full bg-white/70 border border-gray-800 outline-none px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-green-950/40"
            >
              <option value="">Selecione</option>
              <option value="pendente">Pendente</option>
              <option value="processando">Processando</option>
              <option value="finalizado">Finalizado</option>
              <option value="cancelado">Cancelado</option>
            </select>
          </div>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="mt-6 w-full bg-green-800 hover:bg-green-900 disabled:opacity-60 disabled:cursor-not-allowed text-gray-100 text-sm font-medium py-2.5 rounded-full transition-colors"
          >
            {isSaving ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}