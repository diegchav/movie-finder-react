import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
    OPEN_SIDEBAR,
    Context
} from '../../store';

import NavBarStyled from './NavBarStyled';

const NavBar = () => {
    const { dispatch } = useContext(Context);

    return (
        <NavBarStyled>
            <h1 className="title">Movie Finder</h1>
            <IconButton className="menu-icon" onClick={() => dispatch({ type: OPEN_SIDEBAR })}>
                <MenuIcon style={{ color: 'black' }} />
            </IconButton>
        </NavBarStyled>
    );
};

export default NavBar;