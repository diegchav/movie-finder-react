import styled from 'styled-components';

const BodyStyled = styled.div`
    display: flex;
    width: 100%;
    padding: 2rem 1.5rem;
    flex: 1;
    overflow: auto;

    .filters {
        display: none;
    }

    .main {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }

    @media (min-width: 768px) {
        .filters {
            display: block;
            width: 30%;
        }

        .main {
            width: 70%;
        }
    }
`;

export default BodyStyled;