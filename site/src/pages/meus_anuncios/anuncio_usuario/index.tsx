import {
    faCamera,
    faEye,
    faPen,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import BotaoOpcoes from "../../../components/botao_opcoes";
import { formatarDataHorario } from "../../../utils/datas";
import { Anuncio } from "../../../types";
import Container from "./estilo";

type Props = {
    anuncio: Anuncio;
};

const AnuncioUsuario = (props: Props) => {
    const router = useRouter();

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
                    <div className="bloco_datas">
                        <p className="data">
                            {`Data criado: ${formatarDataHorario(
                                props.anuncio.data_criado
                            )}`}
                        </p>
                        <p className="data">
                            {`Data atualizado: ${formatarDataHorario(
                                props.anuncio.data_atualizado
                            )}`}
                        </p>
                    </div>
                    <p className="ativo">
                        {props.anuncio.ativo === 1 ? "Ativo" : "Desativado"}
                    </p>
                </div>
                <div className="bloco_titulo">
                    <p className="titulo">{props.anuncio.titulo}</p>
                    <p className="tipo">{props.anuncio.tipo_anuncios.nome}</p>
                </div>
                <div className="bloco_valor">
                    {/* <p className="texto_detalhes">Visualizações: 999</p> */}
                    {/* <p className="texto_detalhes">
                        Comentários: {props.anuncio.comentarios.length}
                    </p> */}
                    <div className="bloco_valor_atual">
                        <p className="valor_atual">
                            {(
                                Number(props.anuncio.valores[0].valor) / 100
                            ).toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>
                    </div>
                    <div className="bloco_opcoes">
                        <BotaoOpcoes
                            cor="var(--cor-erro)"
                            titulo="Excluir anúncio"
                            icone={faTrash}
                            funcao={() => console.log("Excluir")}
                        ></BotaoOpcoes>
                        <BotaoOpcoes
                            cor="var(--cor-roxa)"
                            titulo="Editar anúncio"
                            icone={faPen}
                            funcao={() =>
                                router.push(
                                    `/editar_anuncio/${props.anuncio.id}`
                                )
                            }
                        ></BotaoOpcoes>
                        <BotaoOpcoes
                            cor="var(--cor-verde-azulado)"
                            titulo="Ver anúncio"
                            icone={faEye}
                            funcao={() =>
                                router.push(`anuncio/${props.anuncio.id}`)
                            }
                        ></BotaoOpcoes>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AnuncioUsuario;
