import styled from "styled-components";

const Container = styled.div`
    .bloco_mensagens {
        display: flex;
        flex-direction: column;
        background-color: var(--cor-fundo-container);
        padding: 1rem;
        border-radius: 0.5rem;
        gap: 1rem;
    }

    .bloco_sem_mensagens {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .texto_sem_mensagens {
        text-align: center;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        font-size: 1.3rem;
        padding: 5rem 0rem;
    }

    .titulo {
        margin: 1.2rem;
        text-transform: uppercase;
        font-size: 1.7rem;
        text-align: center;
        color: var(--cor-primaria);
        font-weight: bold;
    }
`;

export default Container;
