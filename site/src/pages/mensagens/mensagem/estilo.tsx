import styled from "styled-components";

const Container = styled.div`
    .mensagem {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: var(--cor-container);
        padding: 1rem;
    }

    .bloco_imagem {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: var(--cor-fundo-imagem);
        height: 6rem;
        width: 6rem;
    }

    .imagem_anuncio {
        max-width: 6rem;
        max-height: 6rem;
    }

    .titulo_anuncio {
        font-size: 0.9rem;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--cor-texto-escuro);
        width: 15rem;
    }

    .texto_data {
        font-size: 0.75rem;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--cor-texto-escuro);
        width: 15rem;
    }

    .meu_anuncio {
        font-size: 0.95rem;
        text-transform: uppercase;
        color: var(--cor-primaria);
        font-weight: bold;
        width: 15rem;
    }

    .comentario {
        font-size: 0.8rem;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--cor-texto-escuro);
        width: 15rem;
    }

    .bloco_informacoes_anuncio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
`;

export default Container;
