import styled from 'styled-components';

const FilterStyled = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin: 0 2rem;
    background-color: #f0f0f0;;

    .filter {
        padding: .5rem 0;
        margin-top: 1rem;
        border: 1px solid black;
        background-color: white;
        font-size: .8rem;
        border-radius: 5px;
        cursor: pointer;
    }

    @media (min-width: 650px) {
        height: 100%;
        justify-content: space-between;
    }
`;

export default FilterStyled;