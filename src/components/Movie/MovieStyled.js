import styled from 'styled-components';

const MovieStyled = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-secundary-color);
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(var(--dark-gray), .1);

    img {
        width: 100%;
        min-height: 250px;
        cursor: pointer;
    }

    .content {
        padding: 1rem .5rem;
        flex: 1;
        display: flex;
        align-items: center;
        max-height: 100px;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-height: 100%;
            overflow: hidden;

            .title {
                font-size: .9rem;
                font-weight: bolder;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 1rem;
            }

            .rate {
                margin-left: auto;
                background-color: var(--secundary-color);
                padding: .5rem;
                border: 1px solid var(--border-secundary-color);
                border-radius: 5px;
            }
        }

        .overview {
            display: none;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        height: 300px;

        img {
            width: 35%;
            height: 100%;
        }

        .content {
            width: 65%;
            min-height: 100%;
            flex-direction: column;
            padding: 1rem;
            border-left: 1px solid var(--border-secundary-color);

            .header {
                width: 100%;

                title {
                    font-size: 1rem;
                }
            }

            .overview {
                display: block;
                margin-top: 1.1rem;
                font-size: .85rem;
            }
        }
    }
`;

export default MovieStyled;