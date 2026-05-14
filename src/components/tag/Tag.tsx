export type Status = 'pendente' | 'processando' | 'finalizado' | 'cancelado';

interface TagProps {
  status: Status;
}

const statusColors: Record<Status, string> = {
  pendente: 'font-medium text-sm bg-gray-700/30 text-gray-700 border border-gray-700 rounded-full px-2 py-1',
  processando: 'font-medium text-sm bg-orange-500/30 text-orange-700 border border-orange-700 rounded-full px-2 py-1',
  finalizado: 'font-medium text-sm bg-green-500/30 text-green-700 border border-green-700 rounded-full px-2 py-1',
  cancelado: 'font-medium text-sm bg-red-500/30 text-red-700 border border-red-700 rounded-full px-2 py-1',
};

export function Tag({ status }: TagProps) {
  return (
    <span className={statusColors[status]}>
      {status}
    </span>
  );
}