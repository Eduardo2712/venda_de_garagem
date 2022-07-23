import styled from "styled-components";

const Container = styled.div`
    .bloco_menu_celular {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .bloco_menu_celular {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            bottom: 0.5rem;
            width: 90%;
            margin: 1rem auto;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: row;
            padding: 0.5rem;
            border-radius: 0.4rem;
            border: 0.1rem solid var(--cor-container);
            background-color: var(--cor-primaria);
            z-index: 10;
        }

        .bloco_link {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .icone {
            font-size: 1.5rem;
            color: var(--cor-primaria);
            background-color: var(--cor-container);
            padding: 0.3rem;
            border-radius: 0.2rem;
            height: 1.5rem;
            width: 2rem;
        }
    }
`;

export default Container;
