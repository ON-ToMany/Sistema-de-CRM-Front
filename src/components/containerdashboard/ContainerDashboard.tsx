//Container reutilizavél para as paginas de dashboards

interface ContainerDashboardProps {
    nome: string;
    tipo: 'empresa' | 'cliente';
    children: React.ReactNode;
}

const descricoes = {
    empresa: 'Gerencie o impacto ambiental das suas oportunidades e visualize os resultados de forma clara e intuitiva.',
    cliente: 'Acompanhe suas oportunidades e visualize o impacto ambiental gerado por suas ações.'
}

function ContainerDashboard({ nome, tipo, children }: ContainerDashboardProps) {
  return (
    <div className="flex-1 h-full overflow-y-auto p-8 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-6 bg-green-800/20 rounded-3xl p-8 border border-green-800 shadow-md self-start">
            <div className="flex flex-col gap-2.5">
                <h2 className="text-3xl font-bold text-green-800">Olá, {nome}!</h2>
                <p className="text-sm text-gray-900">{descricoes[tipo]}</p>
            </div>
            <hr className="text-black/20"/>
            {children}
        </div>
    </div>
  )
}

export default ContainerDashboard