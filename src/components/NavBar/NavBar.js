import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavBarStyled from './NavBarStyled';

const NavBar = () => (
    <NavBarStyled>
        <h1 className="title">Movie Finder</h1>
        <IconButton className="menu-icon">
            <MenuIcon style={{ color: 'black' }} />
        </IconButton>
    </NavBarStyled>
);

export default NavBar;