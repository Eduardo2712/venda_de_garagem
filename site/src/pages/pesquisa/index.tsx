import Buscar from "../../components/buscar";
import ContainerPrincipal from "../../components/container_principal";
import AnunciosPesquisa from "./anuncios_pesquisa";

const Anuncios = () => {
    return (
        <>
            <ContainerPrincipal>
                <Buscar></Buscar>
                <AnunciosPesquisa></AnunciosPesquisa>
            </ContainerPrincipal>
        </>
    );
};

export default Anuncios;
