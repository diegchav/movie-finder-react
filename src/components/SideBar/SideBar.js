import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import GenreList from '../GenreList/GenreList';

import SideBarStyled from './SideBarStyled';

const SideBar = ({ onClose, genres }) => (
    <SideBarStyled>
        <div className="close">
            <IconButton onClick={() => onClose()}>
                <CloseIcon />
            </IconButton>
        </div>
        <GenreList genres={genres} />
    </SideBarStyled>
);

SideBar.propTypes = {
    onClose: PropTypes.func.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};

export default SideBar;