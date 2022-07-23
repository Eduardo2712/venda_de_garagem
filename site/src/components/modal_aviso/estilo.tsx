import styled from "styled-components";

const Container = styled.div`
    .fundo {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: var(--transparencia-modal);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .corpo {
        background-color: white;
        color: black;
        min-width: 15rem;
        min-height: 17rem;
        border-radius: 1rem;
        animation: 1s ease-out 0s 1 movimento_modal;
    }

    .bloco_conteudo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        gap: 3rem;
        padding: 1rem;
    }

    .descricao {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: var(--cor-primaria);
        font-weight: bold;
    }

    .bloco_botoes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem;
        margin-top: 2rem;
    }

    .botao_fechar {
        text-transform: uppercase;
        color: var(--cor-container);
        font-size: 1.2rem;
        text-shadow: 0.03rem 0.03rem black;
        font-weight: bold;
        background-color: var(--cor-primaria);
        border: 0rem;
        padding: 1rem;
        border-radius: 0.5rem;
        width: 8rem;
        height: 3.5rem;
        transition-duration: 0.5s;
        margin: 1rem 0rem;
    }

    .botao_fechar:hover {
        background-color: white;
        color: var(--cor-primaria);
        outline: 0.2rem solid var(--cor-primaria);
    }

    .icone {
        font-size: 6rem;
        color: var(--cor-primaria);
    }
`;

export default Container;
