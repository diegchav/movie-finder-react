import styled from 'styled-components';

const MovieOverlayStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;

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
                        font-size: .7rem;
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
                margin: 1.5rem 0;
                font-size: .8rem;
            }

            .actions {
                width: 100%;
                margin-top: auto;
                display: flex;
                justify-content: space-evenly;

                button {
                    cursor: pointer;
                    padding: .5rem 1rem;
                    border: none;

                    &.offline {
                        background-color: white;
                        border: 2px solid #f0f0f0;
                    }

                    &.online {
                        background-color: #f0f0f0;
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
                width: 30%;
                height: 100%;
                padding: 0 1rem;
            }

            .content {
                width: 70%;
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
                        background-color: #f0f0f0;
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