import styled from "styled-components";

const Container = styled.div`
    .bloco_formulario {
        margin: 1.5rem 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem 3rem;
        background-color: var(--cor-fundo-container);
        padding: 1rem 2rem;
        border-radius: 1rem;
    }

    .bloco_botoes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap-reverse;
    }

    .botao_voltar {
        text-transform: uppercase;
        color: var(--cor-container);
        font-size: 1.2rem;
        text-shadow: 0.03rem 0.03rem black;
        font-weight: bold;
        background-color: var(--cor-primaria);
        border: 0rem;
        padding: 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        width: 10rem;
        height: 3rem;
        display: inline-block;
        text-align: center;
        transition-duration: 0.5s;
    }

    .botao_voltar:hover {
        background-color: var(--cor-container);
        color: var(--cor-primaria);
        outline: 0.2rem solid var(--cor-primaria);
    }

    .link > a {
        color: var(--cor-primaria);
        text-transform: uppercase;
        font-size: 1rem;
        padding: 0.9rem;
        text-decoration: none;
        cursor: pointer;
        margin: 0rem 2rem;
        transition: text-shadow 0.5s;
        font-weight: bold;
    }

    .link > a:hover {
        text-shadow: 0.06rem 0.06rem black;
    }

    @media screen and (max-width: 600px) {
        .bloco_botoes {
            gap: 1.5rem;
        }

        .link > a {
            font-size: 0.8rem;
        }
    }

    @media screen and (max-width: 400px) {
        .bloco_botoes {
            gap: 1rem;
        }
    }
`;

export default Container;
