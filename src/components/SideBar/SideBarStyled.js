import styled from 'styled-components';

const SideBarStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--primary-color);
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

    @media (min-width: 768px) {
        display: none;
    }
`;

export default SideBarStyled;