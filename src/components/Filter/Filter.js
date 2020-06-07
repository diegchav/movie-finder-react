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
            <div className="container">
                <GenreList />
                <button className="filter" onClick={() => dispatch({ type: FILTER_MOVIES })}>Filter</button>
            </div>
        </FilterStyled>
    );
};

export default Filter;