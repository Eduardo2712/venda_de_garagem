import styled from "styled-components";

const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1.5rem 0rem;

    .bloco_anuncio {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 1rem 0rem;
        gap: 2rem 2rem;
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: var(--cor-fundo-container);
    }

    .anuncio {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 0.5rem;
        width: 12rem;
    }

    .bloco_imagem_anuncio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 12rem;
        width: 12rem;
        background-color: var(--cor-fundo-imagem);
        cursor: pointer;
        text-decoration: none;
    }

    .imagem_anuncio {
        max-height: 12rem;
        max-width: 12rem;
    }

    .titulo_anuncio {
        font-size: 0.85rem;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .tipo_anuncio {
        font-size: 0.85rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .valor_anuncio {
        font-size: 1.1rem;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--cor-texto-claro);
        background-color: var(--cor-primaria);
        padding: 0.3rem;
        border-radius: 0.5rem;
    }

    .texto_sem_anuncios {
        text-align: center;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        font-size: 1.2rem;
        padding: 3rem 0rem;
    }

    @media screen and (max-width: 700px) {
        .titulo {
            font-size: 1.3rem;
        }
    }
`;

export default Container;
