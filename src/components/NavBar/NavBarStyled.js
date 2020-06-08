import styled from 'styled-components';

const NavBarStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background-color: var(--primary-color);
    min-height: 48px;

    .title {
        font-size: 1.5rem;
        cursor: pointer;
    }

    .menu-icon {
        margin-left: auto;
    }

    @media (min-width: 768px) {
        .menu-icon {
            display: none;
        }
    }
`;

export default NavBarStyled;