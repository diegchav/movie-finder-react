import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Filter from '../Filter/Filter';

import SideBarStyled from './SideBarStyled';

const SideBar = (props) => (
    <SideBarStyled>
        <div className="close">
            <IconButton onClick={() => props.onClose()}>
                <CloseIcon />
            </IconButton>
        </div>
        <Filter {...props} />
    </SideBarStyled>
);

SideBar.propTypes = {
    onClose: PropTypes.func.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    filteredGenres: PropTypes.instanceOf(Set).isRequired,
    onAddOrRemoveFilter: PropTypes.func.isRequired,
    onApplyFilters: PropTypes.func.isRequired
};

export default SideBar;