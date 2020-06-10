import React, { useContext, useEffect } from 'react';

import MovieOverlay from './components/MovieOverlay/MovieOverlay';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';

import {
    SET_MOVIES,
    SET_SPINNER_LOADING,
    Context
} from './store';

import MovieService from './services/movie-service';

import AppStyled from './AppStyled';

const App = () => {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        const loadTopRatedMovies = async () => {
            dispatch({ type: SET_SPINNER_LOADING });
            const movies = await MovieService.retrieve();
            dispatch({ type: SET_MOVIES, payload: movies });
            dispatch({ type: SET_SPINNER_LOADING });
        };

        loadTopRatedMovies();
    }, [dispatch]);

    const { isOverlayVisible } = state;

    return (
        <AppStyled>
            { isOverlayVisible && <MovieOverlay /> }
            <NavBar />
            <Body />
        </AppStyled>
    );
};

export default App;
