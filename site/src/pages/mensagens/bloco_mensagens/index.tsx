import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BotaoRedirecionar from "../../../components/botao_redirecionar";
import Carregando from "../../../components/carregando";
import TituloModulo from "../../../components/titulo_modulo";
import { AutenticacaoContext } from "../../../context/autenticacao";
import { Anuncio, Comentario, ContextLogin } from "../../../types";
import Mensagem from "../mensagem";
import Container from "./estilo";

const BlocoMensagens = () => {
    const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const { usuario } = useContext(AutenticacaoContext) as ContextLogin;

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_URL_BASE}/api/comentarios/${usuario?.id}`
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
                <TituloModulo titulo="Minhas mensagens"></TituloModulo>
                <div className="bloco_sem_mensagens">
                    <p className="texto_sem_mensagens">
                        Você não possui mensagens
                    </p>
                    <BotaoRedirecionar
                        texto="Meus anúncios"
                        url={`/meus_anuncios`}
                    ></BotaoRedirecionar>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <TituloModulo titulo="Minhas mensagens"></TituloModulo>
            <div className="bloco_mensagens">
                {anuncios.map((anuncio: Anuncio) => {
                    return (
                        <Mensagem key={anuncio.id} anuncio={anuncio}></Mensagem>
                    );
                })}
            </div>
        </Container>
    );
};

export default BlocoMensagens;
