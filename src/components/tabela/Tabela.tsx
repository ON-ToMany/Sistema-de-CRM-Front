import { Tag, type Status } from "../tag/Tag";
import { useEffect, useState, useContext } from "react";
import { RiBallPenFill, RiDeleteBin6Line } from "react-icons/ri";
import { buscar, atualizar, deletar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
import type { Oportunidade } from "../../models/Oportunidade";
import OportunidadeModal from "../modal/oportunidade/Oportunidade";
import { EditarOportunidadeModal } from "../modal/editaroportunidade/EditarOportunidade";
import { ConfirmDeleteModal } from "../modal/confirmadelete/ConfirmaDelete";
import { ToastAlerta } from "../../utils/ToastAlerta";

interface TabelaProps {
  statusFixo?: Status[];
  mostrarEditar?: boolean;
  mostrarDeletar?: boolean;
}

function Tabela({ statusFixo, mostrarEditar = false, mostrarDeletar = false }: TabelaProps) {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [filtroStatus, setFiltroStatus] = useState<Status | "">("");
  const [filtroCategoria, setFiltroCategoria] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Oportunidade | null>(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [oportunidadeDetalhes, setOportunidadeDetalhes] = useState<Oportunidade | null>(null);
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    async function carregarOportunidades() {
      setIsLoading(true);

      try {
        await buscar("/oportunidades/todas", setOportunidades, {
          headers: {
            Authorization: usuario.token,
          },
        });
      } catch (error) {
        ToastAlerta("Erro ao carregar oportunidades. Tente novamente.", "erro");
      } finally {
        setIsLoading(false);
      }
    }

    if (usuario?.token) {
      carregarOportunidades();
    }
  }, [usuario?.token]);

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
    <>
      <OportunidadeModal
        isOpen={openDetalhes}
        onClose={() => { setOpenDetalhes(false); setOportunidadeDetalhes(null); }}
        oportunidade={oportunidadeDetalhes}
      />

      {mostrarEditar && (
        <EditarOportunidadeModal
          isOpen={open}
          onClose={() => { setOpen(false); setSelected(null); }}
          initialData={{
            nomeEquipamento: selected?.equipamento,
            categoria: selected?.categoria,
            status: selected?.status,
          }}
          onSave={async (data) => {
            if (!selected) return;

            const oportunidadeAtualizada: Oportunidade = {
              id: selected.id,
              equipamento: data.nomeEquipamento,
              categoria: data.categoria,
              status: data.status as Status,
              peso: Number(selected.peso),
              valorConservacao: selected.valorConservacao,
              estadoConservacao: selected.estadoConservacao,
              co2Economizado: selected.co2Economizado,
            };

            try {
              await atualizar(
                `/oportunidades/atualizar`,
                oportunidadeAtualizada,
                () => {},
                {
                  headers: {
                    Authorization: usuario.token,
                  },
                }
              );

              setOportunidades((prev) =>
                prev.map((item) =>
                  item.id === selected.id ? oportunidadeAtualizada : item
                )
              );

              ToastAlerta("Oportunidade atualizada com sucesso!", "sucesso");
              setOpen(false);
              setSelected(null);
            } catch (error) {
              ToastAlerta("Erro ao salvar. Tente novamente.", "erro");
            }
          }}
        />
      )}

      {mostrarDeletar && (
        <ConfirmDeleteModal
          isOpen={openDelete}
          onClose={() => setOpenDelete(false)}
          onConfirm={async () => {
            if (deleteId === null) return;
            try {
              await deletar(`/oportunidades/deletar/${deleteId}`, {
                headers: { Authorization: usuario.token },
              });

              setOportunidades((prev) =>
                prev.filter((item) => item.id !== deleteId)
              );

              ToastAlerta("Oportunidade deletada com sucesso!", "sucesso");
            } catch (error) {
              ToastAlerta("Erro ao deletar. Tente novamente.", "erro");
            } finally {
              setDeleteId(null);
            }
          }}
        />
      )}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
        <span className="text-sm  md:text-md text-gray-900">Filtros:</span>

        <div className="flex gap-2">
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="flex-1 sm:flex-none bg-green-900 text-gray-100 text-sm md:px-2 py-1 rounded-full cursor-pointer hover:bg-green-800 focus:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-950"
          >
            <option value="">Categoria</option>
            <option value="reciclado">Reciclado</option>
            <option value="reutilizado">Reutilizado</option>
            <option value="descartado">Descartado</option>
            <option value="indefinido">Indefinido</option>
          </select>

          {!statusFixo && (
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value as Status)}
              className="flex-1 sm:flex-none bg-green-900 text-gray-100 text-sm md:px-2 py-1 rounded-full cursor-pointer hover:bg-green-800 focus:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-950"
            >
              <option value="">Status</option>
              <option value="pendente">Pendente</option>
              <option value="processando">Processando</option>
              <option value="finalizado">Finalizado</option>
              <option value="cancelado">Cancelado</option>
            </select>
          )}
        </div>
      </div>

      <div className="w-full mt-4 overflow-x-auto max-w-full">
        {isLoading ? (
          <p className="text-sm text-gray-500 text-center py-6">
            Carregando oportunidades...
          </p>
        ) : dadosFiltrados.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">
            Nenhuma oportunidade encontrada.
          </p>
        ) : (
          <table className="w-full min-w-120 border-spacing-y-2">
            <thead>
              <tr className="text-left text-sm text-green-900 font-normal border-b border-green-950">
                <th className="px-3 sm:px-4 pb-2 border-b border-green-900 font-medium">
                  Oportunidade
                </th>
                <th className="px-3 sm:px-4 pb-2 border-b border-green-900 font-medium">
                  Categoria
                </th>
                <th className="px-3 sm:px-4 pb-2 border-b border-green-900 font-medium">
                  Status
                </th>
                {(mostrarEditar || mostrarDeletar) && (
                  <th className="px-3 sm:px-4 pb-2 border-b border-green-900 font-medium text-center">
                    Ações
                  </th>
                )}
              </tr>
            </thead>

            <tbody>
              {dadosFiltrados.map((item) => (
                <tr key={item.id}
                  onClick={() => {setOportunidadeDetalhes(item); setOpenDetalhes(true);}} 
                  className="w-full text-sm sm:text-base cursor-pointer hover:bg-green-900/5 transition-colors"                
                >
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{item.equipamento}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{item.categoria}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    <Tag status={item.status} />
                  </td>

                  {(mostrarEditar || mostrarDeletar) && (
                    <td className="px-3 sm:px-4 py-2 sm:py-3">
                      <div className="flex justify-center gap-2">
                        {mostrarEditar && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelected(item);
                              setOpen(true);
                            }}
                            className="p-1.5 sm:p-2 rounded-full border border-gray-700 bg-gray-700/10 hover:bg-gray-700/20 transition-colors duration-200"
                          >
                            <RiBallPenFill className="text-gray-700 text-sm sm:text-base" />
                          </button>
                        )}

                        {mostrarDeletar && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(item.id);
                            }}
                            className="p-1.5 sm:p-2 rounded-full border border-red-800 bg-red-800/20 hover:bg-red-800/30 transition-colors duration-200"
                          >
                            <RiDeleteBin6Line className="text-red-800 text-sm sm:text-base" />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Tabela;