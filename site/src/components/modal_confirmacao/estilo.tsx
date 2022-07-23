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
    }

    .bloco_conteudo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        gap: 3rem;
        padding: 1rem;
    }

    .titulo {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.8rem;
        margin-top: 1rem;
        color: var(--cor-texto);
    }

    .descricao {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: var(--cor-texto);
    }

    .bloco_botoes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem;
        margin-top: 2rem;
    }

    .botao_nao {
        background-color: var(--cor-erro);
        padding: 0.9rem;
        color: white;
        border-radius: 0.5rem;
        border: 0rem;
        text-transform: uppercase;
        font-size: 1.2rem;
        margin: 0 0.5rem;
        height: 3rem;
        width: 7rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .botao_sim {
        background-color: var(--cor-confirmacao);
        padding: 0.9rem;
        color: white;
        border-radius: 0.5rem;
        border: 0rem;
        text-transform: uppercase;
        font-size: 1.2rem;
        margin: 0 0.5rem;
        height: 3rem;
        width: 7rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export default Container;
