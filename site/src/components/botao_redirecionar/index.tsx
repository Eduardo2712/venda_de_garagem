import { useRouter } from "next/router";
import Container from "./estilo";

type Props = {
    url?: string;
    texto?: string;
};

const BotaoRedirecionar = (props: Props) => {
    const router = useRouter();

    return (
        <Container>
            <button
                className="botao_voltar"
                type="button"
                onClick={() =>
                    props.url ? router.push(props.url) : history.back()
                }
            >
                {props.texto ?? "Voltar"}
            </button>
        </Container>
    );
};

export default BotaoRedirecionar;
