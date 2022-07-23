import styled from "styled-components";

const Container = styled.div`
    .sem_anuncios {
        text-align: center;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: bold;
        margin: 5rem 0rem;
        color: var(--cor-texto-escuro);
    }

    .bloco_anuncios {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        background-color: var(--cor-fundo-container);
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 1rem 0rem;
    }

    .quantidade_anuncios {
        text-transform: uppercase;
        font-size: 0.9rem;
        color: var(--cor-texto-escuro);
        text-align: end;
        margin-top: 1rem;
    }

    @media screen and (max-width: 800px) {
        .quantidade_anuncios {
            text-align: center;
        }
    }
`;

export default Container;
