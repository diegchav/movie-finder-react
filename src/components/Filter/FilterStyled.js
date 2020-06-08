import styled from 'styled-components';

const FilterStyled = styled.div`
    padding: 1rem;
    background-color: var(--primary-color);
    height: 100%;

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;

        .filter {
            margin-top: auto;
            padding: .5rem 0;
            border: 1px solid black;
            background-color: white;
            font-size: .8rem;
            border-radius: 5px;
            cursor: pointer;
        }
    }
ß
    @media (min-width: 650px) {
        height: 100%;
        justify-content: space-between;
    }

    @media (min-width: 768px) {
        margin: 0;
    }
`;

export default FilterStyled;