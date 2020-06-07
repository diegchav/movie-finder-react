import styled from 'styled-components';

const MovieListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .5rem;
    margin: 0 1rem 1rem;
    overflow-y: scroll;

    @media (min-width: 450px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 650px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export default MovieListStyled;