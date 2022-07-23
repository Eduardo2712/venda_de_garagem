import axios from "axios";
import { useEffect, useState } from "react";
import BotaoRedirecionar from "../../../../components/botao_redirecionar";
import Container from "./estilo";

const ConfirmacaoEmail = () => {
    const parametros = new URLSearchParams(window.location.search);
    const [nome, setNome] = useState<string>("");

    useEffect(() => {
        axios
            .get(
                `${
                    process.env.NEXT_PUBLIC_URL_BASE
                }/api/usuarios/confirmar_email?confirmacao=${parametros.get(
                    "confirmacao"
                )}`
            )
            .then((resposta) => {
                setNome(resposta.data.nome);
            })
            .catch((erro) => {
                console.error(`Erro ${erro}`);
            });
    }, []);

    return (
        <Container>
            <div className="bloco_confirmacao">
                <p className="texto_confirmacao">
                    {nome !== ""
                        ? `${
                              nome.split(" ")[0]
                          } seu e-mail foi confirmado com sucesso`
                        : `E-mail não existe ou já confirmado`}
                </p>
                <BotaoRedirecionar
                    texto="Entrar"
                    url="/logar"
                ></BotaoRedirecionar>
            </div>
        </Container>
    );
};

export default ConfirmacaoEmail;
