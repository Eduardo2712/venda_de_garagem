import styled from "styled-components";

const Container = styled.div`
    .bloco_buscar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1.2rem 0rem;
    }

    .campo_buscar {
        padding: 1rem;
        border-radius: 1rem 0rem 0rem 1rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        width: 40rem;
        background-color: var(--cor-fundo-container);
        border: 0;
    }

    .campo_buscar:focus {
        outline: 0.2rem solid var(--cor-primaria);
        outline-offset: -0.2rem;
    }

    .botao_buscar {
        text-transform: uppercase;
        color: var(--cor-container);
        font-size: 1.2rem;
        text-shadow: 0.03rem 0.03rem black;
        background-color: var(--cor-primaria);
        padding: 1rem;
        border-radius: 0rem 1rem 1rem 0rem;
        width: 7rem;
        text-align: center;
        transition-duration: 0.5s;
        border: 0;
    }

    .botao_buscar:hover {
        background-color: var(--cor-container);
        color: var(--cor-primaria);
        outline: 0.2rem solid var(--cor-primaria);
        outline-offset: -0.2rem;
    }

    @media screen and (max-width: 800px) {
        .campo_buscar,
        .botao_buscar {
            font-size: 0.9rem;
            padding: 0.9rem;
        }
    }
`;

export default Container;
