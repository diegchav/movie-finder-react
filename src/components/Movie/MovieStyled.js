import styled from 'styled-components';

const MovieStyled = styled.div`
    cursor: pointer;
    border: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    .image {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 200px;
        }

        span {
            text-align: center;
        }
    }

    .content {
        flex: auto;
        padding: .5rem;
        height: 100%;

        .header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;

            .title-date {
                display: flex;
                flex-direction: column;

                .title {
                    font-size: 1.2rem;
                    font-weight: bolder;
                }

                .date {
                    margin-top: .5rem;
                    font-size: .75rem;
                }
            }

            .rate {
                margin-left: auto;
                background-color: #f0f0f0;
                padding: .5rem;
                border-radius: 2.5px;
            }
        }

        .overview {
            margin-top: 1rem;
            display: none;
        }
    }
`;

export default MovieStyled;