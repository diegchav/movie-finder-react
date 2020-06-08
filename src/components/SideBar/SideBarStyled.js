import styled from 'styled-components';

const SideBarStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--primary-color);
    padding: 1.5rem 1rem;
    z-index: 1;
    display: ${props => props.visible ? 'inline-block' : 'none'};

    .close {
        display: flex;

        button {
            margin-left: auto;
            width: 24px;
            height: 24px;
        }
    }

    @media (min-width: 768px) {
        width: 30%;
        display: inline-block;
        position: unset;

        .close {
            display: none;
        }
    }

    @media (min-width: 1200px) {
        width: 20%;
    }
`;

export default SideBarStyled;