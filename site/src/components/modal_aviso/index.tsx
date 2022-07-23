import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setModalAviso } from "../../store/modal_aviso/modalAviso.store";
import Container from "./estilo";

const ModalAviso = () => {
    const modalAviso = useSelector((state: RootState) => state.modalAviso);
    const dispatch = useDispatch();
    const clickModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.currentTarget.id === "modal") {
            dispatch(
                setModalAviso({
                    ...modalAviso,
                    ativo: false,
                })
            );
        }
    };

    return (
        <Container>
            {modalAviso.ativo ? (
                <div className="fundo" onClick={(e) => clickModal(e)}>
                    <div className="corpo">
                        <div className="bloco_conteudo">
                            <FontAwesomeIcon
                                className="icone"
                                icon={faExclamationCircle as IconProp}
                            ></FontAwesomeIcon>
                            <p className="descricao">{modalAviso.descricao}</p>
                        </div>
                        <div className="bloco_botoes">
                            <button
                                type="button"
                                className="botao_fechar"
                                onClick={() =>
                                    dispatch(
                                        setModalAviso({
                                            ...modalAviso,
                                            ativo: false,
                                        })
                                    )
                                }
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </Container>
    );
};

export default ModalAviso;
