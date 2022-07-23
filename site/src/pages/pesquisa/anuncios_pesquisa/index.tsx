import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import AnuncioExtendido from "../anuncio_extendido";
import Paginacao from "../../../components/paginacao";
import Container from "./estilo";

const AnunciosPesquisa = () => {
    const paginacaoAnuncios = useSelector(
        (state: RootState) => state.paginacaoAnuncios
    );

    if (paginacaoAnuncios.anuncios.length === 0) {
        return (
            <Container>
                <p className="sem_anuncios">Nenhum anúncio encontrado</p>
            </Container>
        );
    }

    return (
        <Container>
            <Paginacao></Paginacao>
            <p className="quantidade_anuncios">
                {`${paginacaoAnuncios.total_anuncios} anúncios encontrados`}
            </p>
            <div className="bloco_anuncios">
                {paginacaoAnuncios.anuncios.map((anuncio, index) => {
                    return (
                        <AnuncioExtendido
                            key={index}
                            anuncio={anuncio}
                        ></AnuncioExtendido>
                    );
                })}
            </div>
            <Paginacao></Paginacao>
        </Container>
    );
};

export default AnunciosPesquisa;
