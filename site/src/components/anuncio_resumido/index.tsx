import axios from "axios";
import { useEffect, useState } from "react";
import { Anuncio } from "../../types";
import Carregando from "../carregando";
import Container from "./estilo";
import Link from "next/link";
import TituloModulo from "../titulo_modulo";

type Props = {
    url_api: string;
    titulo: string;
};

const AnuncioResumido = (props: Props) => {
    const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get(`${props.url_api}/5`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                if (res.data.sucesso) {
                    setAnuncios(res.data.anuncios);
                }
                setCarregando(false);
            })
            .catch((erro) => {
                console.error(`Erro: ${erro}`);
                setCarregando(false);
            });
    }, []);

    if (carregando) {
        return <Carregando></Carregando>;
    }

    if (anuncios.length === 0) {
        return (
            <Container>
                <p className="texto_sem_anuncios">Nenhum anúncio encontrado</p>
            </Container>
        );
    }

    return (
        <Container>
            <TituloModulo titulo={props.titulo}></TituloModulo>
            <div className="bloco_anuncio">
                {anuncios.map((anuncio, index) => {
                    return (
                        <div className="anuncio" key={index}>
                            {anuncio.imagens[0] ? (
                                <Link
                                    className="link_anuncio"
                                    href={`/anuncio/${anuncio.id}`}
                                >
                                    <div className="bloco_imagem_anuncio">
                                        <img
                                            className="imagem_anuncio"
                                            src={anuncio.imagens[0].caminho}
                                        />
                                    </div>
                                </Link>
                            ) : (
                                <Link
                                    className="link_anuncio"
                                    href={`/anuncio/${anuncio.id}`}
                                >
                                    <div className="bloco_imagem_anuncio">
                                        <p className="titulo_anuncio">
                                            Sem imagem
                                        </p>
                                    </div>
                                </Link>
                            )}
                            <p className="titulo_anuncio">{anuncio.titulo}</p>
                            <p className="tipo_anuncio">
                                {anuncio.tipo_anuncios.nome}
                            </p>
                            <p className="valor_anuncio">
                                {(anuncio.valores[0]
                                    ? Number(anuncio.valores[0].valor) / 100
                                    : 0
                                ).toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default AnuncioResumido;
