import styled from "styled-components";

const Container = styled.div`
    .bloco_principal {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .valor_anuncio {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--cor-texto-claro);
        background-color: var(--cor-primaria);
        padding: 0.8rem 1.2rem;
        border-radius: 0.5rem;
    }

    .bloco_contato {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .bloco_informacoes_vendedor {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2rem;
        margin-top: 1rem;
        background-color: var(--cor-fundo-container);
        border-radius: 0.4rem;
    }

    .nome_vendedor {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: var(--cor-primaria);
        font-weight: bold;
    }

    .informacoes_vendedor {
        display: flex;
        flex-direction: row;
        width: 16rem;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        font-size: 1rem;
        text-transform: uppercase;
        color: var(--cor-primaria);
        font-weight: bold;
    }

    .icone {
        width: 1.7rem;
        height: 1.7rem;
        color: var(--cor-primaria);
        cursor: pointer;
    }

    .bloco_icones_contatos {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .comentario {
        margin-top: 1rem;
        min-width: 15rem;
        max-width: 15rem;
        min-height: 8rem;
        max-height: 8rem;
        border-radius: 0.5rem;
        border: 0.1rem solid var(--cor-primaria);
        padding: 0.5rem;
        font-size: 1rem;
        text-transform: uppercase;
    }

    .botao_enviar {
        text-transform: uppercase;
        color: var(--cor-container);
        font-size: 1.2rem;
        text-shadow: 0.03rem 0.03rem black;
        font-weight: bold;
        background-color: var(--cor-primaria);
        border: 0rem;
        padding: 1rem;
        border-radius: 0.5rem;
        width: 10rem;
        height: 3.5rem;
        transition-duration: 0.5s;
        margin: 1rem 0rem;
    }

    .botao_enviar:hover {
        background-color: white;
        color: var(--cor-primaria);
        outline: 0.2rem solid var(--cor-primaria);
    }

    .titulo_conteudo {
        margin-top: 1rem;
        font-size: 1.4rem;
        text-transform: uppercase;
        text-align: start;
        font-weight: bold;
    }

    .tipo_anuncio {
        margin-top: 1rem;
        font-size: 1.4rem;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
    }

    .data_hora {
        margin-top: 1rem;
        text-transform: uppercase;
        font-size: 0.95rem;
    }

    .bloco_descricao_endereco {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        padding: 2rem;
        flex-wrap: wrap;
        gap: 2rem 5rem;
    }

    .conteudo {
        padding: 0.2rem;
        border-radius: 0.5rem;
        width: 100%;
        background-color: var(--cor-fundo-container);
        min-height: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bloco_conteudo {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.5rem 0rem;
        width: 35rem;
    }

    .informacoes {
        text-align: start;
        text-transform: uppercase;
        padding: 0.5rem;
        font-size: 0.9rem;
        line-height: 1.5rem;
    }

    .negrito {
        font-weight: bold;
    }
`;

export default Container;
