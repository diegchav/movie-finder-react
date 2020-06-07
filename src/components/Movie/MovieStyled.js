import styled from 'styled-components';

const MovieStyled = styled.div`
    cursor: pointer;
    height: 200px;
    border: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    img {
        max-width: 100%;
        height: 200px;
    }

    span {
        text-align: center;
    }
`;

export default MovieStyled;