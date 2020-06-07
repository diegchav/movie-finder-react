import React from 'react';
import PropTypes from 'prop-types';

import GenreList from '../GenreList/GenreList';

import FilterStyled from './FilterStyled';

const Filter = ({ genres, filteredGenres, onAddOrRemoveFilter, onApplyFilters }) => (
    <FilterStyled>
        <GenreList genres={genres} filteredGenres={filteredGenres} onAddOrRemoveFilter={onAddOrRemoveFilter} />
        <button className="filter" onClick={onApplyFilters}>Filter</button>
    </FilterStyled>
);

Filter.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    filteredGenres: PropTypes.instanceOf(Set).isRequired,
    onAddOrRemoveFilter: PropTypes.func.isRequired,
    onApplyFilters: PropTypes.func.isRequired
};

export default Filter;