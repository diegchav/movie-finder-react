import styled from 'styled-components';

const GenreListStyled = styled.div`
    margin-bottom: 1rem;
    overflow-y: scroll;

    .title {
        margin-bottom: 1rem;
    }

    .genres {
        overflow-y: scroll;
    }

    @media (min-width: 650px) {
        .genres {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 768px) {
        .genres {
            display: block;
        }
    }
`;

export default GenreListStyled;