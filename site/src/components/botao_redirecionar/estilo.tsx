import styled from "styled-components";

const Container = styled.div`
    .botao_voltar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        color: var(--cor-container);
        font-size: 1.1rem;
        text-shadow: 0.03rem 0.03rem black;
        font-weight: bold;
        background-color: var(--cor-primaria);
        border: 0rem;
        border-radius: 0.5rem;
        text-decoration: none;
        min-width: 10rem;
        height: 3rem;
        text-align: center;
        transition-duration: 0.5s;
        padding: 0.5rem;
    }

    .botao_voltar:hover {
        background-color: var(--cor-container);
        color: var(--cor-primaria);
        outline: 0.2rem solid var(--cor-primaria);
    }
`;

export default Container;
