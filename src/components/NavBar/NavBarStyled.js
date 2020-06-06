import styled from 'styled-components';

const NavBarStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background-color: #f0f0f0;

    .title {
        font-size: 1.5rem;
        cursor: pointer;
    }

    .menu-icon {
        margin-left: auto;
    }
`;

export default NavBarStyled;