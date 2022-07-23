import styled from "styled-components";

const Container = styled.div`
    .fundo {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: var(--transparencia-modal);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .corpo {
        background-color: white;
        color: black;
        min-width: 15rem;
        min-height: 15rem;
        border-radius: 1rem;
    }

    .bloco_conteudo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        gap: 3rem;
        padding: 1rem;
    }

    .titulo {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: var(--cor-primaria);
        font-weight: bold;
    }
`;

export default Container;
