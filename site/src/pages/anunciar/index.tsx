import { useRouter } from "next/router";
import { useContext } from "react";
import Carregando from "../../components/carregando";
import ContainerPrincipal from "../../components/container_principal";
import { AutenticacaoContext } from "../../context/autenticacao";
import { ContextLogin } from "../../types";
import FormularioAnuncio from "./formulario_anuncio";

const NovoAnuncio = () => {
    const router = useRouter();
    const { autenticado, carregando } = useContext(
        AutenticacaoContext
    ) as ContextLogin;

    if (carregando) {
        return <Carregando></Carregando>;
    }

    if (!autenticado) {
        router.push("/");
    }

    return (
        <ContainerPrincipal>
            <FormularioAnuncio></FormularioAnuncio>
        </ContainerPrincipal>
    );
};

export default NovoAnuncio;
