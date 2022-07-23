import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Imagem } from "../../types";
import Container from "./estilo";

type Props = {
    imagens: Imagem[];
};

const Carrosel = (props: Props) => {
    const [imagemAtual, setImagemAtual] = useState<number>(0);
    const quantidadeImagens = props.imagens.length;

    const proximaImagem = () => {
        setImagemAtual(
            imagemAtual === quantidadeImagens - 1 ? 0 : imagemAtual + 1
        );
    };

    const anteriorImagem = () => {
        setImagemAtual(
            imagemAtual === 0 ? quantidadeImagens - 1 : imagemAtual - 1
        );
    };

    return (
        <Container>
            <>
                <div className="bloco_imagem">
                    <div className="bloco_botao">
                        {imagemAtual > 0 ? (
                            <button
                                className="botao_seta"
                                type="button"
                                onClick={() => anteriorImagem()}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowLeft}
                                ></FontAwesomeIcon>
                            </button>
                        ) : null}
                    </div>
                    <div className="bloco_imagens">
                        {quantidadeImagens > 0 ? (
                            <img
                                className="imagem_anuncio"
                                src={`${props.imagens[imagemAtual].caminho}`}
                            ></img>
                        ) : (
                            <p className="texto_sem_imagem">Sem imagens</p>
                        )}
                    </div>
                    <div className="bloco_botao">
                        {imagemAtual < quantidadeImagens - 1 ? (
                            <button
                                className="botao_seta"
                                type="button"
                                onClick={() => proximaImagem()}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                ></FontAwesomeIcon>
                            </button>
                        ) : null}
                    </div>
                </div>
            </>
        </Container>
    );
};

export default Carrosel;
