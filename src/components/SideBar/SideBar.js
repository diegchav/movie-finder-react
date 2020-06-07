import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Filter from '../Filter/Filter';

import {
    CLOSE_SIDEBAR,
    Context
} from '../../store';

import SideBarStyled from './SideBarStyled';

const SideBar = () => {
    const { dispatch } = useContext(Context);

    return (
        <SideBarStyled>
            <div className="close">
                <IconButton onClick={() => dispatch({ type: CLOSE_SIDEBAR })}>
                    <CloseIcon />
                </IconButton>
            </div>
            <Filter />
        </SideBarStyled>
    );
};

export default SideBar;