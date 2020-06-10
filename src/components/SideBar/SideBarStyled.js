import styled from 'styled-components';

const SideBarStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--secundary-color);
    border-right: 1px solid var(--border-secundary-color);
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
        max-height: 100%;
        display: inline-block;
        position: unset;
        padding: 0;

        .close {
            display: none;
        }
    }

    @media (min-width: 1200px) {
        width: 20%;
    }
`;

export default SideBarStyled;