import React, { useContext, useEffect } from 'react';

import MovieOverlay from './components/MovieOverlay/MovieOverlay';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';

import {
    SET_GENRES,
    SET_MOVIES,
    SET_SPINNER_LOADING,
    Context
} from './store';

import GenreService from './services/genre-service';
import MovieService from './services/movie-service';

import AppStyled from './AppStyled';

const App = () => {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        const loadGenres = async () => {
            const genres = await GenreService.retrieve();
            dispatch({ type: SET_GENRES, payload: genres });
        };

        const loadTopRatedMovies = async () => {
            dispatch({ type: SET_SPINNER_LOADING });
            const movies = await MovieService.retrieve();
            dispatch({ type: SET_MOVIES, payload: movies });
            dispatch({ type: SET_SPINNER_LOADING });
        };

        loadGenres();
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
