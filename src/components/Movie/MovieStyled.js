import styled from 'styled-components';

const MovieStyled = styled.div`
    border: 1px solid #f0f0f0;
    display: flex;
    flex-direction: column;

    .image {
        img {
            width: 100%;
            cursor: pointer;
        }
    }

    .content {
        padding: 1rem .5rem;

        .header {
            display: flex;
            align-items: center;

            .title {
                font-size: .9rem;
                font-weight: bolder;
            }

            .rate {
                margin-left: auto;
                background-color: #f0f0f0;
                padding: .5rem;
                border-radius: 2.5px;
            }
        }

        .overview {
            display: none;
        }
    }
`;

export default MovieStyled;