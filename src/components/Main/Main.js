import React, { useContext } from 'react';

import Search from '../Search/Search';
import MovieList from '../MovieList/MovieList';

import withSpinner from '../../hoc/with-spinner';

import { Context } from '../../store';

import MainStyled from './MainStyled';

const MovieListWithSpinner = withSpinner(MovieList);

const Main = () => {
    const { state } = useContext(Context);

    return (
        <MainStyled>
            <Search />
            <MovieListWithSpinner isLoading={state.isSpinnerLoading} />
        </MainStyled>
    );
};

export default Main;