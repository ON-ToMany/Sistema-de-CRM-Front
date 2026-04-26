import { Tag, type Status } from "../../../../components/tag/Tag";
import { RiBallPenFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { EditarOportunidadeModal } from "../modal/editaroportunidade/EditarOportunidade";
import { ConfirmDeleteModal } from "../modal/confirmadelete/ConfirmaDelete";

interface Oportunidade {
  id: number;
  equipamento: string;
  categoria: string;
  status: Status;
}

interface TabelaProps {
  statusFixo?: Status[];
}

const dados: Oportunidade[] = [
  { id: 1, equipamento: "Celular exemplo", categoria: "reuso", status: "Pendente" },
  { id: 2, equipamento: "Notebook exemplo", categoria: "reuso", status: "Processando" },
  { id: 3, equipamento: "Monitor exemplo", categoria: "reciclagem", status: "Finalizado" },
  { id: 4, equipamento: "Celular exemplo", categoria: "reuso", status: "Pendente" },
  { id: 5, equipamento: "Tablet exemplo", categoria: "reuso", status: "Processando" },
  { id: 6, equipamento: "Computador exemplo", categoria: "reciclagem", status: "Finalizado" },
];

function Tabela({ statusFixo }: TabelaProps) {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [filtroStatus, setFiltroStatus] = useState<Status | "">("");
  const [filtroCategoria, setFiltroCategoria] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Oportunidade | null>(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    setOportunidades(dados);
  }, []);

  const dadosFiltrados = oportunidades.filter((item) => {
    return (
      (statusFixo ? statusFixo.includes(item.status) : true) &&
      (filtroStatus === "" || item.status === filtroStatus) &&
      (filtroCategoria === "" || item.categoria === filtroCategoria)
    );
  });

  function handleDelete(id: number) {
    setDeleteId(id);
    setOpenDelete(true);
  }

  return (
    <div>
      <EditarOportunidadeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        initialData={{
          nomeEquipamento: selected?.equipamento,
          categoria: selected?.categoria,
          status: selected?.status,
        }}
        onSave={(data) => {
          setOportunidades((prev) =>
            prev.map((item) =>
              item.id === selected?.id
                ? {
                    ...item,
                    equipamento: data.nomeEquipamento,
                    categoria: data.categoria,
                    status: data.status as Status,
                  }
                : item
            )
          );
          setOpen(false);
        }}
      />

      <ConfirmDeleteModal
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={() => {
          setOportunidades((prev) => prev.filter((item) => item.id !== deleteId));
        }}
      />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <span className="text-sm sm:text-md text-gray-900">Filtros:</span>
        <div className="flex gap-2">
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="flex-1 sm:flex-none bg-green-900 text-gray-100 text-sm px-2 py-1 rounded-full cursor-pointer hover:bg-green-800 focus:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-950"
          >
            <option value="">Categoria</option>
            <option value="reuso">Reuso</option>
            <option value="reciclagem">Reciclagem</option>
          </select>

          {!statusFixo && (
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value as Status)}
              className="flex-1 sm:flex-none bg-green-900 text-gray-100 text-sm px-2 py-1 rounded-full cursor-pointer hover:bg-green-800 focus:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-950"
            >
              <option value="">Status</option>
              <option value="Pendente">Pendente</option>
              <option value="Processando">Processando</option>
              <option value="Finalizado">Finalizado</option>
            </select>
          )}
        </div>
      </div>

      <div className="w-full mt-4 overflow-x-auto mx-0">
        <table className="w-full min-w-120 border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm text-green-900 font-normal border-b border-green-950">
              <th className="px-3 sm:px-4 pb-2 border-b border-green-900 font-medium">Oportunidade</th>
              <th className="px-3 sm:px-4 pb-2 border-b border-green-900 font-medium">Categoria</th>
              <th className="px-3 sm:px-4 pb-2 border-b border-green-900 font-medium">Status</th>
              <th className="px-3 sm:px-4 pb-2 border-b border-green-900 font-medium text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {dadosFiltrados.map((item) => (
              <tr key={item.id} className="w-full text-sm sm:text-base">
                <td className="px-3 sm:px-4 py-2 sm:py-3">{item.equipamento}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3">{item.categoria}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3">
                  <Tag status={item.status} />
                </td>
                <td className="px-3 sm:px-4 py-2 sm:py-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => { setSelected(item); setOpen(true); }}
                      className="p-1.5 sm:p-2 rounded-full border border-gray-700 bg-gray-700/10 hover:bg-gray-700/20 transition-colors duration-200">
                      <RiBallPenFill className="text-gray-700 text-sm sm:text-base" />
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 sm:p-2 rounded-full border border-red-800 bg-red-800/20 hover:bg-red-800/30 transition-colors duration-200">
                      <RiDeleteBin6Line className="text-red-800 text-sm sm:text-base" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabela;