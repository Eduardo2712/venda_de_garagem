import styled from "styled-components";

const Container = styled.div`
    .bloco_paginacao {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .numero_pagina_atual {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--cor-texto-claro);
        background-color: var(--cor-primaria);
        padding: 1rem;
        border-radius: 50%;
    }

    .botao_paginacao {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 0;
        background-color: var(--cor-primaria);
        border-radius: 0.5rem;
        color: var(--cor-texto-claro);
        padding: 0.4rem;
    }

    .bloco_numero {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 3rem;
    }

    .icone_seta {
        font-size: 1.2rem;
    }
`;

export default Container;
