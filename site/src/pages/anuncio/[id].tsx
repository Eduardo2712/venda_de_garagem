import { useRouter } from "next/router";
import ContainerPrincipal from "../../components/container_principal";
import AnuncioCompleto from "./anuncio_completo";

const Anuncio = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <ContainerPrincipal>
                <AnuncioCompleto id={Number(id)}></AnuncioCompleto>
            </ContainerPrincipal>
        </>
    );
};

export default Anuncio;
