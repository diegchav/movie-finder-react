import styled from 'styled-components';

const MainStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 1200px) {
        width: 80%;
    }
`;

export default MainStyled;