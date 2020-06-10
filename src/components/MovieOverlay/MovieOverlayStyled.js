import styled from 'styled-components';

const MovieOverlayStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 2;

    .container-box {
        background-color: white;
        position: fixed;
        top: 2.5rem;
        left: 2.5rem;
        bottom: 2.5rem;
        right: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;

        .close {
            color: black;
            position: absolute;
            /* button width is 48px */
            top: -20px;
            right: -20px;
            z-index: 2;
        }

        img {
            max-width: 100%;
        }

        .content {
            display: flex;
            flex-direction: column;

            .header {
                display: flex;
                align-items: center;
                width: 100%;
                margin-top: 1.5rem;

                .title-date {
                    display: flex;
                    flex-direction: column;

                    .title {
                        font-size: .9rem;
                    }

                    .date {
                        margin-top: .25rem;
                        font-size: .7rem;
                    }
                }

                .rate {
                    margin-left: auto;
                    background-color: var(--secundary-color);
                    border: 1px solid var(--border-secundary-color);
                    padding: .5rem;
                    border-radius: 2.5px;
                }
            }

            .overview {
                margin: 1.5rem 0;
                font-size: .8rem;
            }

            .actions {
                width: 100%;
                margin-top: auto;
                display: flex;
                flex-direction: column;

                button {
                    cursor: pointer;
                    padding: .5rem 1rem;
                    border: none;

                    &.offline {
                        background-color: var(--primary-color);
                        border: 1px solid var(--border-primary-color);
                        margin-bottom: .25rem;
                    }

                    &.online {
                        background-color: var(--secundary-color);
                        border: 1px solid var(--border-secundary-color);
                        margin-top: .25rem;
                    }
                }
            }
        }
    }

    @media (min-width: 336px) {
        .container-box {
            .content {
                .actions {
                    flex-direction: row;
                    justify-content: space-evenly;

                    button.offline {
                        margin-bottom: 0;
                    }

                    button.online {
                        margin-top: 0;
                    }
                }
            }
        }
    }

    @media (min-width: 650px) {
        .container-box {
            flex-direction: row;
            height: 450px;
            margin: auto;
            padding: 1rem 0;

            img {
                width: 40%;
                height: 100%;
                padding: 0 1rem;
            }

            .content {
                width: 60%;
                height: 100%;
                padding: 0 1rem;

                .header {
                    .title-date {
                        .title {
                            font-size: 1.2rem;
                        }

                        .date {
                            font-size: .75rem;
                        }
                    }

                    .rate {
                        margin-left: auto;
                        padding: .5rem;
                        border-radius: 2.5px;
                    }
                }

                .overview {
                    font-size: 1rem;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        .container-box {
            width: 80%;
        }
    }

    @media(min-width: 1200px) {
        .container-box {
            width: 60%;
        }
    }
`;

export default MovieOverlayStyled;