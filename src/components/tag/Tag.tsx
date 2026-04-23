export type Status = 'Pendente' | 'Processando' | 'Finalizado';

interface TagProps {
  status: Status;
}

const statusColors: Record<Status, string> = {
  Pendente: 'font-medium text-sm bg-gray-700/30 text-gray-700 border border-gray-700 rounded-full px-2 py-1',
  Processando: 'font-medium text-sm bg-orange-500/30 text-orange-700 border border-orange-700 rounded-full px-2 py-1',
  Finalizado: 'font-medium text-sm bg-green-500/30 text-green-700 border border-green-700 rounded-full px-2 py-1',
};

export function Tag({ status }: TagProps) {
  return (
    <span className={statusColors[status]}>
      {status}
    </span>
  );
}