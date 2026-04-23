import { Tag, type Status } from "../../../../components/tag/Tag";
import { RiBallPenFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { EditarOportunidadeModal } from "../modal/editaroportunidade/EditarOportunidade";
import { atualizar, buscar, deletar } from "../../../../services/Service";

interface Oportunidade {
  id: number;
  equipamento: string;
  categoria: string;
  status: Status;
}

function Tabela() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [filtroStatus, setFiltroStatus] = useState<Status | "">("");
  const [filtroCategoria, setFiltroCategoria] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Oportunidade | null>(null);

  const token = localStorage.getItem("token");

  const header = {
    headers: {
      Authorization: token,
    },
  };

  async function buscarOportunidades() {
    try {
      await buscar("/oportunidades/todas", setOportunidades, header);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    buscarOportunidades();
  }, []);

  const dadosFiltrados = oportunidades.filter((item) => {
    return (
      (filtroStatus === "" || item.status === filtroStatus) &&
      (filtroCategoria === "" || item.categoria === filtroCategoria)
    );
  });

  async function handleDelete(id: number) {
    try {
      await deletar(`/oportunidades/deletar/${id}`, header);
      setOportunidades((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
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
        onSave={async (data) => {
          try {
            await atualizar(
              `/oportunidades/atualizar`,
              {
                id: selected?.id,
                equipamento: data.nomeEquipamento,
                categoria: data.categoria,
                status: data.status,
              },
              () => {},
              header
            );

            await buscarOportunidades();
            setOpen(false);
          } catch (error) {
            console.error(error);
          }
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
        </div>
      </div>

      {/* Tabela com scroll horizontal no mobile */}
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
                      onClick={() => {setSelected(item); setOpen(true);}}
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