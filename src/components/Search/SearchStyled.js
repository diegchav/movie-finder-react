import styled from 'styled-components';

const SearchStyled = styled.div`
    margin: 1.5rem 1rem;
    display: flex;

    input[type=text] {
        flex: 1;
        padding: 0 1rem;
        font-size: .8rem;
        border: 1px solid #f0f0f0;
    }

    button {
        background-color: #f0f0f0;
        border-radius: unset;
    }
`;

export default SearchStyled;