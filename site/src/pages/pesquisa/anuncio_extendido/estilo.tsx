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
        padding: 0.5rem;
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
        gap: 0.5rem;
        width: 16rem;
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

    .valor_antigo {
        font-size: 1.1rem;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        text-decoration: line-through;
        text-decoration-color: var(--cor-erro);
        padding: 0.3rem;
        border-radius: 0.5rem;
        width: 10rem;
    }

    .bloco_valor_atual {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
    }

    .desconto_negativo {
        color: var(--cor-erro);
        font-weight: bold;
        font-size: 1rem;
    }

    .desconto_positivo {
        color: var(--cor-confirmacao);
        font-weight: bold;
        font-size: 1rem;
    }

    .bloco_informacoes {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 8rem;
    }

    .localidade,
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

        .desconto_negativo,
        .desconto_positivo {
            font-size: 0.85rem;
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
            width: 13rem;
            order: 3;
        }

        .valor_atual {
            font-size: 0.9rem;
            width: 8.5rem;
        }

        .valor_antigo {
            font-size: 0.9rem;
            width: 8.5rem;
        }

        .bloco_titulo {
            gap: 0.9rem;
            width: 20rem;
            order: 1;
        }
    }

    @media screen and (max-width: 920px) {
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
            height: 22rem;
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

        .desconto_negativo,
        .desconto_positivo {
            display: none;
        }

        .titulo {
            font-size: 1rem;
            margin-top: 0.5rem;
        }
    }
`;

export default Container;
