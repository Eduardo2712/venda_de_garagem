import styled from "styled-components";

const Container = styled.div`
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
        margin: 2rem 0rem;
    }

    .texto_sem_anuncios {
        text-align: center;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        font-size: 1.2rem;
        padding: 3rem 0rem;
    }

    .bloco_sem_anuncios {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .bloco_anunciar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export default Container;
