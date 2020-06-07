import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import GenreList from '../GenreList/GenreList';

import SideBarStyled from './SideBarStyled';

const SideBar = ({ onClose, genres, filteredGenres, onAddOrRemoveFilter, onApplyFilters }) => (
    <SideBarStyled>
        <div className="close">
            <IconButton onClick={() => onClose()}>
                <CloseIcon />
            </IconButton>
        </div>
        <div className="content">
            <GenreList genres={genres} filteredGenres={filteredGenres} onAddOrRemoveFilter={onAddOrRemoveFilter} />
            <button className="apply" onClick={onApplyFilters}>Apply Filters</button>
        </div>
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