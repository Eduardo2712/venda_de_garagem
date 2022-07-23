import styled from "styled-components";

const Container = styled.div`
    .bloco_subir_imagem {
        margin: 3rem 0rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem 3rem;
        background-color: var(--cor-fundo-container);
        padding: 1rem 2rem;
        border-radius: 1rem;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        font-size: 1.2rem;
    }

    .imagem {
        width: 17rem;
        height: auto;
        max-height: 17rem;
        border-radius: 0.5rem;
    }

    .bloco_imagens {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    input[type="file"] {
        display: none;
    }

    .enviar_arquivo {
        text-transform: uppercase;
        color: var(--cor-texto-claro);
        font-size: 1.2rem;
        text-shadow: 0.03rem 0.03rem black;
        font-weight: bold;
        background-color: var(--cor-primaria);
        border: 0rem;
        padding: 1rem;
        border-radius: 0.5rem;
        width: 16rem;
        text-align: center;
        transition-duration: 0.5s;
        cursor: pointer;
    }

    .enviar_arquivo:hover {
        background-color: var(--cor-texto-claro);
        color: var(--cor-primaria);
        outline: 0.2rem solid var(--cor-primaria);
    }

    .botao_fechar {
        color: var(--cor-texto-claro);
        font-weight: bold;
        border: 0;
        background-color: var(--cor-erro);
        font-size: 1.3rem;
        z-index: 10;
        position: relative;
        right: 2.1rem;
        border-radius: 0.2rem;
        bottom: 8rem;
    }

    .caixa_selecao {
        color: var(--cor-texto-claro);
        font-weight: bold;
        border: 0;
        font-size: 1.3rem;
        z-index: 10;
        position: relative;
        right: 18rem;
        border-radius: 0.2rem;
        bottom: 8rem;
        transform: scale(1.7);
    }
`;

export default Container;
