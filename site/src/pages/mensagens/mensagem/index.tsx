import { useContext } from "react";
import { AutenticacaoContext } from "../../../context/autenticacao";
import { formatarDataHorario } from "../../../utils/datas";
import { Anuncio, ContextLogin } from "../../../types";
import Container from "./estilo";

type Props = {
    anuncio: Anuncio;
};

const Mensagem = (props: Props) => {
    const { usuario } = useContext(AutenticacaoContext) as ContextLogin;

    return (
        <Container>
            <div className="mensagem">
                <>
                    <div className="bloco_imagem">
                        {props.anuncio.imagens[0] ? (
                            <img
                                className="imagem_anuncio"
                                src={props.anuncio.imagens[0].caminho}
                            ></img>
                        ) : null}
                    </div>
                    <div className="bloco_informacoes_anuncio">
                        <p className="titulo_anuncio">{props.anuncio.titulo}</p>
                        <p className="meu_anuncio">
                            {props.anuncio.id_usuario === usuario?.id
                                ? "Meu anúncio"
                                : props.anuncio.usuarios.nome}
                        </p>
                    </div>
                    <div className="bloco_informacoes_anuncio">
                        <p className="titulo_anuncio">
                            {props.anuncio.comentarios[0].usuarios.id ===
                            usuario?.id
                                ? "Você"
                                : props.anuncio.comentarios[0].usuarios.nome}
                        </p>
                        <p className="texto_data">
                            {formatarDataHorario(
                                props.anuncio.comentarios[0].data_criado
                            )}
                        </p>
                    </div>
                    <p className="comentario">
                        {props.anuncio.comentarios[0].comentario}
                    </p>
                </>
            </div>
        </Container>
    );
};

export default Mensagem;
