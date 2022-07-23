import styled from "styled-components";

const Container = styled.div`
    .bloco_confirmacao {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        padding: 20rem 0rem;
    }

    .texto_confirmacao {
        font-size: 1.6rem;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
    }
`;

export default Container;
