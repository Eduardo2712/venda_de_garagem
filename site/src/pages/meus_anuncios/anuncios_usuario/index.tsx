import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BotaoRedirecionar from "../../../components/botao_redirecionar";
import Carregando from "../../../components/carregando";
import TituloModulo from "../../../components/titulo_modulo";
import { AutenticacaoContext } from "../../../context/autenticacao";
import { Anuncio, ContextLogin } from "../../../types";
import AnuncioUsuario from "../anuncio_usuario";
import Container from "./estilo";

const AnunciosUsuario = () => {
    const { usuario } = useContext(AutenticacaoContext) as ContextLogin;
    const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_URL_BASE}/api/anuncios/anuncios_usuario/${usuario?.id}`
            )
            .then((resposta) => {
                if (resposta.data.sucesso) {
                    setAnuncios(resposta.data.anuncios);
                }
                setCarregando(false);
            })
            .catch((erro) => {
                console.error(`Erro ${erro}`);
                setCarregando(false);
            });
    }, []);

    if (carregando) {
        return <Carregando></Carregando>;
    }

    if (anuncios.length === 0) {
        return (
            <Container>
                <div className="bloco_sem_anuncios">
                    <p className="texto_sem_anuncios">
                        Você não tem nenhum anúncio
                    </p>
                    <BotaoRedirecionar
                        texto="Anunciar"
                        url={`/anunciar`}
                    ></BotaoRedirecionar>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <TituloModulo titulo="Meus anúncios"></TituloModulo>
            <div className="bloco_anuncios">
                {anuncios.map((anuncio, index) => {
                    return (
                        <AnuncioUsuario
                            anuncio={anuncio}
                            key={index}
                        ></AnuncioUsuario>
                    );
                })}
            </div>
            <div className="bloco_anunciar">
                <BotaoRedirecionar
                    texto="Novo anúncio"
                    url={`/anunciar`}
                ></BotaoRedirecionar>
            </div>
        </Container>
    );
};

export default AnunciosUsuario;
