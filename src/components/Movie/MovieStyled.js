import styled from 'styled-components';

const MovieStyled = styled.div`
    border: 1px solid var(--primary-color);
    display: flex;
    flex-direction: column;
    height: 350px;

    img {
        width: 100%;
        height: 250px;
        cursor: pointer;
    }

    .content {
        padding: 1rem .5rem;
        flex: 1;
        display: flex;
        align-items: center;

        .header {
            display: flex;
            align-items: center;

            .title {
                font-size: .9rem;
                font-weight: bolder;
            }

            .rate {
                margin-left: auto;
                background-color: var(--primary-color);
                padding: .5rem;
                border-radius: 2.5px;
            }
        }

        .overview {
            display: none;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        padding: .5rem;
        height: 300px;

        img {
            width: 35%;
            height: 100%;
        }

        .content {
            width: 65%;
            flex-direction: column;
            padding-left: 1rem;

            .header {
                width: 100%;

                title {
                    font-size: 1rem;
                }
            }

            .overview {
                display: block;
                margin-top: 1.1rem;
                overflow:hidden;
                font-size: .85rem;
            }
        }
    }
`;

export default MovieStyled;