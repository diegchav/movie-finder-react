import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavBarStyled from './NavBarStyled';

const NavBar = ({ onOpenSideBar }) => (
    <NavBarStyled>
        <h1 className="title">Movie Finder</h1>
        <IconButton className="menu-icon" onClick={() => onOpenSideBar()}>
            <MenuIcon style={{ color: 'black' }} />
        </IconButton>
    </NavBarStyled>
);

NavBar.propTypes = {
    onOpenSideBar: PropTypes.func.isRequired
};

export default NavBar;