import styled from "styled-components";

const Container = styled.div`
    .botao_opcoes {
        color: var(--cor-container);
        background-color: ${(props) => props.color};
        padding: 0.5rem;
        border: 0;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    .botao_opcoes:hover {
        color: ${(props) => props.color};
        background-color: var(--cor-container);
        outline: 0.2rem solid ${(props) => props.color};
        outline-offset: -0.2rem;
    }
`;

export default Container;
