//Container reutilizavél para as paginas de dashboards
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import type { Oportunidade } from "../../../models/Oportunidade";
import ImpactCards from "../impactcards/impactCards";
import OportunidadesAtivas from "../oportunidadesativas/OportunidadesAtivas";
import OportunidadesFinalizadas from "../oportunidadesfinalizadas/OportunidadesFinalizadas";

interface ContainerDashboardProps {
    oportunidades: Oportunidade[];
    children?: React.ReactNode;
}

const descricoes = {
    empresa: 'Gerencie o impacto ambiental das suas oportunidades e visualize os resultados de forma clara e intuitiva.',
    cliente: 'Acompanhe suas oportunidades e visualize o impacto ambiental gerado por suas ações.',
    '': ''
}

function ContainerDashboard({ oportunidades, children }: ContainerDashboardProps) {
    const { usuario } = useContext(AuthContext);

    return (
        <div className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden p-2 md:p-8 flex justify-center">
            <div className="min-w-0 w-full flex flex-col gap-6 bg-green-800/20 rounded-3xl p-4 md:p-8 border border-green-800 shadow-md self-start">
                <div className="flex flex-col gap-2.5">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800">Olá, {usuario.nome}!</h2>
                    <p className="text-sm text-gray-900">{descricoes[usuario.tipo]}</p>
                </div>
                <hr className="text-black/20"/>

                {children 
                    ? (children) 
                    : (
                        <>
                            <OportunidadesAtivas />
                            <OportunidadesFinalizadas />

                            <h2 className="text-2xl md:text-3xl font-bold text-green-800">Impacto</h2>
                            <hr className="text-black/20"/>

                            <ImpactCards oportunidades={oportunidades}/>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default ContainerDashboard