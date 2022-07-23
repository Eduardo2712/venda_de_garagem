import Container from "./estilo";

type Props = {
    botaoFechar: (ativo: boolean) => void;
    titulo: string;
    descricao?: string;
};

const ModalConfirmacao = (props: Props) => {
    const clickModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.currentTarget.id === "modal") {
            props.botaoFechar(false);
        }
    };

    return (
        <Container>
            <div className="fundo" onClick={(e) => clickModal(e)}>
                <div className="corpo">
                    <div className="bloco_conteudo">
                        <p className="titulo">{props.titulo}</p>
                        <p className="descricao">{props.descricao}</p>
                    </div>
                    <div className="bloco_botoes">
                        <button
                            type="button"
                            className="botao_nao"
                            onClick={() => props.botaoFechar(true)}
                        >
                            Não
                        </button>
                        <button
                            type="button"
                            className="botao_sim"
                            onClick={() => {}}
                        >
                            Sim
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ModalConfirmacao;
