import styled from 'styled-components';

const GenreListStyled = styled.div`
    margin-bottom: 1rem;

    @media (min-width: 650px) {
        .genres {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 769px) {
        .genres {
            display: block;
        }
    }
`;

export default GenreListStyled;