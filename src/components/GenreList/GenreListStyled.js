import styled from 'styled-components';

const GenreListStyled = styled.div`
    .genres {
        margin-top: 1rem;
    }

    @media (min-width: 650px) {
        .genres {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export default GenreListStyled;