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
        width: 100%;
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

    @media (min-width: 1200px) {
        .filters {
            width: 20%;
        }

        .main {
            width: 80%;
        }
    }
`;

export default BodyStyled;