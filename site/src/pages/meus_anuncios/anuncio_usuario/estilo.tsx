import styled from "styled-components";

const Container = styled.div`
    width: 99%;

    .bloco_anuncio {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        height: 10rem;
        padding: 1rem;
        background-color: var(--cor-container);
    }

    .bloco_imagem {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 9.5rem;
        background-color: var(--cor-fundo-imagem);
        width: 12rem;
        cursor: pointer;
        text-decoration: none;
    }

    .imagem {
        max-height: 9.5rem;
        max-width: 12rem;
    }

    .sem_imagens {
        text-align: center;
        text-transform: uppercase;
        font-size: 1rem;
        color: var(--cor-texto-escuro);
    }

    .bloco_titulo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 27rem;
    }

    .titulo {
        font-size: 0.85rem;
        text-transform: uppercase;
        text-align: center;
        color: var(--cor-texto-escuro);
    }

    .tipo {
        font-size: 0.8rem;
        text-transform: uppercase;
        text-align: center;
        color: var(--cor-texto-escuro);
        font-weight: bold;
    }

    .bloco_valor {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        width: 15rem;
    }

    .valor_atual {
        font-size: 1.1rem;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--cor-texto-claro);
        background-color: var(--cor-primaria);
        padding: 0.3rem;
        border-radius: 0.5rem;
        width: 10rem;
    }

    .bloco_datas {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
    }

    .ativo {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        text-align: center;
        font-weight: bold;
        width: 100%;
    }

    .bloco_valor_atual {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
        width: 100%;
    }

    .bloco_informacoes {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0.7rem;
        height: 8rem;
    }

    .bloco_opcoes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }

    .botao_excluir {
        color: var(--cor-container);
        background-color: var(--cor-erro);
        padding: 0.5rem;
        border: 0;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    .botao_editar {
        color: var(--cor-container);
        background-color: var(--cor-roxa);
        padding: 0.5rem;
        border: 0;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    .texto_detalhes {
        color: var(--cor-texto-escuro);
        font-weight: bold;
        font-size: 1.1rem;
        text-align: center;
        width: 100%;
    }

    .data {
        text-transform: uppercase;
        font-size: 0.75rem;
        color: var(--cor-texto-escuro);
    }

    .bloco_quantidade_fotos {
        z-index: 10;
        position: absolute;
        display: flex;
        width: 12rem;
        justify-content: flex-end;
        height: 9.5rem;
        align-items: flex-end;
    }

    .quantidade_fotos {
        color: var(--cor-preta);
        font-size: 1.3rem;
        font-weight: bold;
        text-shadow: 0.05rem 0.05rem var(--cor-preta);
        margin-left: 0.2rem;
    }

    .icone_camera {
        color: var(--cor-preta);
        font-size: 1.3rem;
        text-shadow: 1rem 1rem 1rem var(--cor-texto-escuro);
    }

    @media screen and (max-width: 1200px) {
        .bloco_imagem {
            height: 8rem;
            width: 9rem;
            order: 0;
        }

        .bloco_quantidade_fotos {
            width: 9rem;
            height: 8rem;
        }

        .imagem {
            max-height: 8rem;
            max-width: 9rem;
        }

        .bloco_anuncio {
            height: 8rem;
        }

        .bloco_valor_atual {
            gap: 0.3rem;
        }

        .bloco_valor {
            gap: 0.3rem;
            width: 12rem;
            order: 3;
        }

        .valor_atual {
            font-size: 1rem;
            width: 8.5rem;
        }

        .bloco_titulo {
            gap: 0.9rem;
            width: 20rem;
            order: 1;
        }
    }

    @media screen and (max-width: 1050px) {
        .bloco_imagem {
            height: 9rem;
            width: 11rem;
        }

        .bloco_quantidade_fotos {
            height: 9rem;
            width: 11rem;
        }

        .imagem {
            max-height: 9rem;
            max-width: 11rem;
        }

        .bloco_anuncio {
            height: 28rem;
            flex-direction: column;
        }

        .bloco_informacoes {
            height: 3rem;
            order: 2;
        }

        .bloco_titulo {
            gap: 0.7rem;
        }

        .bloco_valor {
            align-items: center;
        }

        .bloco_valor_atual {
            flex-direction: column;
            gap: 0.5rem;
        }

        .titulo {
            font-size: 1rem;
            margin-top: 0.5rem;
        }
    }
`;

export default Container;
