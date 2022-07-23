import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Carregando from "../carregando";
import Container from "./estilo";

const ModalCarregando = () => {
    const modalCarregando = useSelector(
        (state: RootState) => state.modalCarregando
    );

    return (
        <Container>
            {modalCarregando.ativo ? (
                <div className="fundo">
                    <div className="corpo">
                        <div className="bloco_conteudo">
                            <p className="titulo">Carregando...</p>
                        </div>
                        <div className="bloco_carregando">
                            <Carregando></Carregando>
                        </div>
                    </div>
                </div>
            ) : null}
        </Container>
    );
};

export default ModalCarregando;
