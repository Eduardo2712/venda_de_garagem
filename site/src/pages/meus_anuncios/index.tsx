import { useRouter } from "next/router";
import { useContext } from "react";
import Carregando from "../../components/carregando";
import ContainerPrincipal from "../../components/container_principal";
import { AutenticacaoContext } from "../../context/autenticacao";
import { ContextLogin } from "../../types";
import AnunciosUsuario from "./anuncios_usuario";

const MeusAnuncios = () => {
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
            <AnunciosUsuario></AnunciosUsuario>
        </ContainerPrincipal>
    );
};

export default MeusAnuncios;
