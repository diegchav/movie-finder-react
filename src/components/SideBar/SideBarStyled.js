import styled from 'styled-components';

const SideBarStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f0f0f0;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    z-index: 1;

    .close {
        display: flex;

        button {
            margin-left: auto;
            width: 24px;
            height: 24px;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        margin: 0 2rem;

        .apply {
            padding: .5rem 0;
            margin-top: 1rem;
            border: 1px solid black;
            background-color: white;
            font-size: .8rem;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;

export default SideBarStyled;