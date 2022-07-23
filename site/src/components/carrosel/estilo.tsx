import styled from "styled-components";

const Container = styled.div`
    margin: 3rem 0rem;

    .botao_seta {
        text-transform: uppercase;
        color: #fff;
        font-size: 1.2rem;
        text-shadow: 0.03rem 0.03rem black;
        font-weight: bold;
        background-color: var(--cor-primaria);
        border: 0rem;
        padding: 1rem;
        border-radius: 0.5rem;
        width: 4rem;
        height: 3rem;
        transition-duration: 0.5s;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bloco_imagem {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: 100%;
    }

    .bloco_imagens {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 38rem;
    }

    .texto_sem_imagem {
        text-transform: uppercase;
        font-size: 1.5rem;
        color: var(--cor-texto-escuro);
    }

    .botao_seta:hover {
        background-color: white;
        color: var(--cor-primaria);
        outline: 0.2rem solid var(--cor-primaria);
    }

    .imagem_anuncio {
        height: 22rem;
        max-width: 38rem;
        border-radius: 0.5rem;
    }

    .bloco_botao {
        width: 5.5rem;
    }

    @keyframes mudar_imagem {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .imagem_anuncio_ativo {
        animation: 3s ease mudar_imagem;
    }

    @media screen and (max-width: 800px) {
        .imagem_anuncio {
            height: 15rem;
            max-width: 20rem;
        }

        .bloco_imagem {
            width: 21rem;
        }

        .botao_seta {
            width: 3rem;
        }
    }
`;
export default Container;
