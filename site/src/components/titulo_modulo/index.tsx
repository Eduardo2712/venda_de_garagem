import Container from "./estilo";

type Props = {
    titulo: string;
};

const TituloModulo = (props: Props) => {
    return (
        <Container>
            <p className="titulo_modulo">{props.titulo}</p>
        </Container>
    );
};

export default TituloModulo;
