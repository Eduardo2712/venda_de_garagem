import axios from "axios";
import { useEffect, useState } from "react";
import Carrosel from "../../../components/carrosel";
import { Anuncio, Comentario, ContextLogin, Valor } from "../../../types";
import Container from "./estilo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelopeSquare,
    faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import Carregando from "../../../components/carregando";
import { formatarDataHorario } from "../../../utils/datas";
import { useContext } from "react";
import { AutenticacaoContext } from "../../../context/autenticacao";
import ModalAviso from "../../../components/modal_aviso";
import { useDispatch } from "react-redux";
import { setModalAviso } from "../../../store/modal_aviso/modalAviso.store";
import TituloModulo from "../../../components/titulo_modulo";
import { useRouter } from "next/router";

type Props = {
    id: number;
};

const AnuncioCompleto = (props: Props) => {
    const [anuncio, setAnuncio] = useState<Anuncio>();
    const [carregando, setCarregando] = useState<boolean>(true);
    const [comentario, setComentario] = useState<string>("");
    const { autenticado, usuario } = useContext(
        AutenticacaoContext
    ) as ContextLogin;
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (props.id) {
            axios
                .get(
                    `${process.env.NEXT_PUBLIC_URL_BASE}/api/anuncios/${Number(
                        props.id
                    )}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                )
                .then((resposta) => {
                    if (resposta.status === 200) {
                        setAnuncio(resposta.data.anuncio);
                    }
                    setCarregando(false);
                })
                .catch((erro) => {
                    console.error(`Erro: ${erro}`);
                    setCarregando(false);
                });
        }
    }, [props.id]);

    if (carregando) {
        return <Carregando />;
    }

    if (!anuncio) {
        return <TituloModulo titulo="Anúncio não encontrado"></TituloModulo>;
    }

    const enviarComentario = () => {
        if (comentario.length === 0) {
            dispatch(
                setModalAviso({
                    ativo: true,
                    descricao: "Digite alguma mensagem",
                })
            );
            return;
        }
        if (!autenticado || !usuario) {
            router.push("/logar");
            return;
        }
        const data: Omit<Comentario, "id" | "data_criado" | "usuarios"> = {
            comentario: comentario,
            id_anuncio: anuncio.id,
            id_usuario: usuario.id,
        };
        axios
            .post(
                `${process.env.NEXT_PUBLIC_URL_BASE}/api/comentarios/criar`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((resposta) => {
                if (resposta.data.sucesso) {
                    setComentario("");
                }
            })
            .catch((erro) => {
                console.error(`Erro ${erro}`);
            });
    };

    return (
        <>
            <Container>
                <TituloModulo titulo={anuncio.titulo}></TituloModulo>
                <div className="bloco_principal">
                    <Carrosel imagens={anuncio.imagens}></Carrosel>
                    <div className="bloco_contato">
                        {anuncio.valores.length > 0 &&
                            anuncio.valores.map(
                                (valor: Valor, index: number) => {
                                    return (
                                        <div key={index}>
                                            {Boolean(valor.ativo) ? (
                                                <p className="valor_anuncio">
                                                    {(
                                                        Number(valor.valor) /
                                                        100
                                                    ).toLocaleString("pt-br", {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    })}
                                                </p>
                                            ) : null}
                                        </div>
                                    );
                                }
                            )}
                        <p className="tipo_anuncio">
                            {anuncio.tipo_anuncios.nome}
                        </p>
                        <p className="data_hora">
                            {formatarDataHorario(anuncio.data_criado)}
                        </p>
                        <div className="bloco_informacoes_vendedor">
                            <p className="nome_vendedor">
                                {anuncio.usuarios.nome.split(" ")[0]}
                            </p>
                            <p className="informacoes_vendedor">
                                <FontAwesomeIcon
                                    className="icone"
                                    icon={faEnvelopeSquare}
                                ></FontAwesomeIcon>
                                {anuncio.usuarios.email}
                            </p>
                            <p className="informacoes_vendedor">
                                <FontAwesomeIcon
                                    className="icone"
                                    icon={faPhoneSquare}
                                ></FontAwesomeIcon>
                                {anuncio.usuarios.telefone}
                            </p>
                            {anuncio.usuarios.id !== usuario?.id && (
                                <>
                                    <textarea
                                        value={comentario}
                                        onChange={(e) =>
                                            setComentario(e.currentTarget.value)
                                        }
                                        className="comentario"
                                        placeholder={`Converse com ${
                                            anuncio.usuarios.nome.split(" ")[0]
                                        }`}
                                    ></textarea>
                                    <button
                                        type="button"
                                        className="botao_enviar"
                                        onClick={() => enviarComentario()}
                                    >
                                        Enviar
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bloco_descricao_endereco">
                    <div className="bloco_conteudo">
                        <p className="titulo_conteudo">Descrição</p>
                        <div className="conteudo">
                            <p className="informacoes">{anuncio.descricao}</p>
                        </div>
                    </div>
                    <div className="bloco_conteudo">
                        <p className="titulo_conteudo">Endereço do anúncio</p>
                        <div className="conteudo">
                            <p className="informacoes">
                                <span className="negrito">CEP:</span>{" "}
                                {anuncio.cep}
                            </p>
                            <p className="informacoes">
                                <span className="negrito">Endereço:</span>{" "}
                                {`${anuncio.rua}, ${anuncio.numero}`}
                            </p>
                            <p className="informacoes">
                                <span className="negrito">Complemento:</span>{" "}
                                {anuncio.complemento}
                            </p>
                            <p className="informacoes">
                                <span className="negrito">Bairro:</span>{" "}
                                {anuncio.bairro}
                            </p>
                            <p className="informacoes">
                                <span className="negrito">Cidade:</span>{" "}
                                {anuncio.cidade}
                            </p>
                            <p className="informacoes">
                                <span className="negrito">Estado:</span>{" "}
                                {anuncio.estado}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <ModalAviso></ModalAviso>
        </>
    );
};

export default AnuncioCompleto;
