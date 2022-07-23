import styled from "styled-components";

const Container = styled.div`
    .bloco_campo_formulario {
        display: flex;
        flex-direction: column;
    }

    .campo_formulario {
        border-radius: 0.5rem;
        text-transform: uppercase;
        width: 25rem;
        border: 0rem;
        padding: 1rem 0rem;
        text-indent: 1rem;
        color: var(--cor-texto-escuro);
        font-size: 1.2rem;
        background-color: var(--cor-container);
    }

    .campo_formulario:focus,
    textarea:focus {
        outline: 0.2rem solid var(--cor-primaria);
        outline-offset: -0.2rem;
    }

    .campo_formulario:disabled {
        background-color: var(--cor-fundo-imagem);
    }

    .campo_erro {
        color: var(--cor-erro);
        margin-top: 0.5rem;
    }

    .texto_formulario {
        padding: 0.2rem;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--cor-primaria);
        font-size: 1rem;
        text-shadow: 0.03rem 0.03rem black;
    }

    textarea {
        border-radius: 0.5rem;
        text-transform: uppercase;
        min-width: 52rem;
        max-width: 52rem;
        min-height: 5rem;
        max-height: 5rem;
        border: 0;
        padding: 1.2rem 0.5rem;
        color: var(--cor-texto-escuro);
        font-size: 1.2rem;
        background-color: var(--cor-container);
    }

    textarea:focus {
        outline: 0.2rem solid var(--cor-primaria);
        outline-offset: -0.2rem;
    }

    @media screen and (max-width: 940px) {
        .campo_formulario,
        textarea {
            min-width: 30rem;
            max-width: 30rem;
        }
    }

    @media screen and (max-width: 600px) {
        .campo_formulario,
        textarea {
            min-width: 18rem;
            max-width: 18rem;
        }
    }
`;

export default Container;
