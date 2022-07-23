import AnuncioResumido from "../components/anuncio_resumido";
import Buscar from "../components/buscar";
import ContainerPrincipal from "../components/container_principal";

const Index = () => {
    return (
        <>
            <ContainerPrincipal>
                <Buscar></Buscar>
                <AnuncioResumido
                    url_api={`${process.env.NEXT_PUBLIC_URL_BASE}/api/anuncios/recentes`}
                    titulo={"Anúncios recentes"}
                ></AnuncioResumido>
                <AnuncioResumido
                    url_api={`${process.env.NEXT_PUBLIC_URL_BASE}/api/anuncios/aleatorios`}
                    titulo={"Outros anúncios"}
                ></AnuncioResumido>
            </ContainerPrincipal>
        </>
    );
};

export default Index;
