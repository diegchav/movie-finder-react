import styled from 'styled-components';

const MovieListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: .5rem;
    margin: 0 1rem 1rem;
    overflow-y: scroll;
`;

export default MovieListStyled;