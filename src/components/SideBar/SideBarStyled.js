import styled from 'styled-components';

const SideBarStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f0f0f0;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    z-index: 1;

    .close {
        display: flex;

        button {
            margin-left: auto;
        }
    }
`;

export default SideBarStyled;