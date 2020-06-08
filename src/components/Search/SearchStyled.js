import styled from 'styled-components';

const SearchStyled = styled.div`
    display: flex;

    input[type=text] {
        flex: 1;
        padding: 0 1rem;
        font-size: .8rem;
        border: 1px solid var(--primary-color);
    }

    button {
        background-color: var(--primary-color);
        border-radius: unset;
    }
`;

export default SearchStyled;