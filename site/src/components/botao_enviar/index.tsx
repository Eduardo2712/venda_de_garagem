import Container from "./estilo";

type Props = {
    titulo: string;
};

const BotaoEnviar = (props: Props) => {
    return (
        <Container>
            <button className="botao_cadastrar" type="submit">
                {props.titulo}
            </button>
        </Container>
    );
};

export default BotaoEnviar;
