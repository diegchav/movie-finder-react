import React, { useContext } from 'react';

import GenreList from '../GenreList/GenreList';

import {
    FILTER_MOVIES,
    Context
} from '../../store';

import FilterStyled from './FilterStyled';

const Filter = () => {
    const { dispatch } = useContext(Context);

    return (
        <FilterStyled>
            <GenreList />
            <button className="filter" onClick={() => dispatch({ type: FILTER_MOVIES })}>Filter</button>
        </FilterStyled>
    );
};

export default Filter;