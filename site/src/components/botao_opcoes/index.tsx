import { faTrash, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./estilo";

type Props = {
    titulo: string;
    cor: string;
    icone: IconDefinition;
    funcao: (e: string) => void;
};

const BotaoOpcoes = (props: Props) => {
    return (
        <Container color={props.cor}>
            <button
                type="button"
                className="botao_opcoes"
                title={props.titulo}
                onClick={(e) => props.funcao(e.currentTarget.value)}
            >
                <FontAwesomeIcon icon={props.icone}></FontAwesomeIcon>
            </button>
        </Container>
    );
};

export default BotaoOpcoes;
