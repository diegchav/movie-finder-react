import styled from 'styled-components';

const NavBarStyled = styled.div`
    min-height: 48px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background-color: var(--primary-color);
    border-bottom: 1px solid var(--border-primary-color);
    box-shadow: 0 5px 8px rgba(var(--dark-gray), .1);

    .title {
        font-size: 1.5rem;
        cursor: pointer;
    }

    .menu-icon {
        margin-left: auto;

        & svg {
            color: rgb(var(--dark-gray));
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export default NavBarStyled;