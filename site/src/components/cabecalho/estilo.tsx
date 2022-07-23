import styled from "styled-components";

const Container = styled.div`
    .cabecalho {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2rem 4rem;
        padding: 1.5rem 0rem;
        width: 100%;
        background-color: var(--cor-primaria);
        color: var(--cor-texto-claro);
        text-transform: uppercase;
        align-items: center;
        font-weight: bold;
    }

    .bloco_links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .bloco_logo {
        padding: 0rem 1rem;
    }

    .link_logo {
        font-family: "Lobster", cursive !important;
        color: var(--cor-texto-claro);
        text-decoration: none;
        font-weight: bold;
        font-size: 1.7rem;
    }

    .bloco_link {
        padding: 0rem 3.5rem;
        display: flex;
        flex-direction: column;
    }

    .bloco_link > a,
    .bloco_link > p {
        cursor: pointer;
        text-decoration: none;
        color: var(--cor-texto-claro);
        font-size: 0.8rem;
        padding: 0.2rem 0rem;
    }

    .bloco_link > a:hover {
        border-bottom: 0.1rem solid var(--cor-texto-claro);
        margin-bottom: -0.1rem;
    }

    .nome_usuario {
        text-decoration: none;
        color: var(--cor-texto-claro);
        font-size: 1rem;
    }

    .nome_usuario > svg {
        margin-left: 1rem;
    }

    .icone {
        font-size: 1.3rem;
        margin-right: 0.3rem;
    }

    .fechar {
        border: 0rem;
        color: var(--cor-container);
        background-color: var(--cor-erro);
        margin-left: 0.5rem;
    }

    .menu_suspenso {
        display: none;
        position: absolute;
        background-color: var(--cor-container);
        box-shadow: 0rem 0.2rem 0.4rem 0rem #00000033;
        z-index: 1;
        padding: 0.2rem;
        border-radius: 0.2rem;
    }

    .link_menu_suspenso {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-top: 0.1rem solid var(--cor-fundo-container);
    }

    .link_menu_suspenso:hover {
        background-color: var(--cor-fundo-container);
    }

    .icone_menu_suspenso {
        width: 1rem;
    }

    .link_menu_suspenso > a {
        width: 100%;
    }

    .link_menu_suspenso > a,
    .link_menu_suspenso > svg,
    .link_menu_suspenso > p {
        color: var(--cor-primaria);
        padding: 0.7rem 0.6rem;
        text-decoration: none;
        display: block;
        text-transform: uppercase;
        font-size: 0.95rem;
        text-decoration: none;
        cursor: pointer;
        transition: text-shadow 0.5s;
    }

    @keyframes movimento_modal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .menu:hover > .menu_suspenso {
        display: block;
        animation: 0.5s ease-out 0s 1 movimento_modal;
    }

    @media screen and (max-width: 1110px) {
        .cabecalho {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 800px) {
        .bloco_links {
            display: none;
        }
    }
`;

export default Container;
