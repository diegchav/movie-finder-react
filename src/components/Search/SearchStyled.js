import styled from 'styled-components';

const SearchStyled = styled.div`
    width: 100%;
    display: flex;
    margin: 1rem 0;

    .search {
        flex: 1;
        padding-right: 1rem;

        input[type=text] {
            width: 100%;
            height: 100%;
            padding-left: 1rem;
            font-size: .9rem;
            color: var(--dark-gray);
            border: none;
            border-left: 2px solid var(--border-secundary-color);
        }
    }

    .search-icon {
        background-color: var(--secundary-color);

        & svg {
            color: rgb(var(--dark-gray));
        }
    }

    @media (min-width: 768px) {
        margin-top: 1.5rem;

        .search {
            input[type=text] {
                border: 2px solid var(--border-secundary-color);
            }
        }
    }
`;

export default SearchStyled;