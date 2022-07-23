import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50rem;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--cor-primaria);

    @media screen and (max-width: 800px) {
        height: 35rem;
        font-size: 2.5rem;
    }
`;

export default Container;
