import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { formatarDataHorario } from "../../../utils/datas";
import { Anuncio } from "../../../types";
import Container from "./estilo";

type Props = {
    anuncio: Anuncio;
};

const AnuncioExtendido = (props: Props) => {
    return (
        <Container>
            <div className="bloco_anuncio">
                <Link href={`/anuncio/${props.anuncio.id}`}>
                    <div className="bloco_imagem">
                        {props.anuncio.imagens[0] ? (
                            <>
                                <img
                                    className="imagem"
                                    src={props.anuncio.imagens[0].caminho}
                                ></img>
                                <div className="bloco_quantidade_fotos">
                                    <FontAwesomeIcon
                                        className="icone_camera"
                                        icon={faCamera}
                                    ></FontAwesomeIcon>
                                    <p className="quantidade_fotos">
                                        {props.anuncio.imagens.length}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <p className="sem_imagens">Sem imagens</p>
                        )}
                    </div>
                </Link>
                <div className="bloco_informacoes">
                    <p className="localidade">{`${props.anuncio.bairro}, ${props.anuncio.cidade}`}</p>
                    <p className="data">
                        {formatarDataHorario(props.anuncio.data_criado)}
                    </p>
                </div>
                <div className="bloco_titulo">
                    <p className="titulo">{props.anuncio.titulo}</p>
                    <p className="tipo">{props.anuncio.tipo_anuncios.nome}</p>
                </div>
                <div className="bloco_valor">
                    <div className="bloco_valor_atual">
                        <p className="valor_atual">
                            {(props.anuncio.valores[0]
                                ? Number(props.anuncio.valores[0].valor) / 100
                                : 0
                            ).toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>
                        {props.anuncio.valores[1]?.valor ? (
                            <p
                                className={`${
                                    (Number(props.anuncio.valores[1].valor) *
                                        100) /
                                        Number(props.anuncio.valores[0].valor) -
                                        100 >
                                    0
                                        ? "desconto_positivo"
                                        : "desconto_negativo"
                                }`}
                            >
                                {(
                                    (Number(props.anuncio.valores[0].valor) *
                                        100) /
                                        Number(props.anuncio.valores[1].valor) -
                                    100
                                )
                                    .toFixed(2)
                                    .replace(".", ",")}
                                %
                            </p>
                        ) : null}
                    </div>
                    {props.anuncio.valores[1]?.valor ? (
                        <p className="valor_antigo">
                            {(
                                Number(props.anuncio.valores[1].valor) / 100
                            ).toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>
                    ) : null}
                </div>
            </div>
        </Container>
    );
};

export default AnuncioExtendido;
