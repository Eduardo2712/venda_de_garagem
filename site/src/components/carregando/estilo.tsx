import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem;

    .carregando {
        border: 0.6rem solid var(--cor-fundo-imagem);
        border-top: 0.6rem solid var(--cor-primaria);
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        animation: rotacao 1s linear infinite;
    }

    @keyframes rotacao {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Container;
