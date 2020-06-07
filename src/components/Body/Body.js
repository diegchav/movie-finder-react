import React, { useContext } from 'react';

import SideBar from '../SideBar/SideBar';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import MovieList from '../MovieList/MovieList';

import withSpinner from '../../hoc/with-spinner';

import {
    Context
} from '../../store';

import BodyStyled from './BodyStyled';

const MovieListWithSpinner = withSpinner(MovieList);

const Body = () => {
    const { state } = useContext(Context);

    return (
        <BodyStyled>
            <SideBar />
            <div className="filters">
                <Filter />
            </div>
            <div className="main">
                <Search />
                <MovieListWithSpinner isLoading={state.isSpinnerLoading} />
            </div>
        </BodyStyled>
    );
};

export default Body;