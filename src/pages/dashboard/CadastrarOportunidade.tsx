import { useContext, useEffect, useRef } from "react";
import ContainerDashboard from "../../components/dashboard/containerdashboard/ContainerDashboard";
import FormCadastrar from "../../components/dashboard/formcadastrar/FormCadastrar";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function CadastrarOportunidade() {
    const { usuario } = useContext(AuthContext);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;

            if (!usuario.token || usuario.token === '') {
                ToastAlerta('Você precisa estar logado!', 'info');
            }
        }
    }, [usuario.token]);

    if (!usuario.token || usuario.token === '') {
        return null; 
    }

    return (
        <ContainerDashboard oportunidades={[]}>
            <FormCadastrar />
        </ContainerDashboard>
    )
}

export default CadastrarOportunidade