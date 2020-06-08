import styled from 'styled-components';

const MovieListStyled = styled.div`
    max-height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .5rem;
    margin-top: 1rem;
    overflow-y: scroll;

    .load-more {
        cursor: pointer;
        padding: .5rem 1rem;
        border: none;
        background-color: var(--primary-color);
        font-size: 1rem;
        margin-top: 1rem;
        grid-column: span 2;
    }

    @media (min-width: 450px) {
        grid-template-columns: repeat(3, 1fr);

        .load-more {
            grid-column: span 3;
        }
    }

    @media (min-width: 650px) {
        grid-template-columns: repeat(4, 1fr);

        .load-more {
            grid-column: span 4;
        }
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(1, 1fr);

        .load-more {
            grid-column: span 1;
        }
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);

        .load-more {
            grid-column: span 2;
        }
    }
`;

export default MovieListStyled;