import React, { useContext, useEffect } from 'react';

import MovieOverlay from './components/MovieOverlay/MovieOverlay';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';

import {
    SET_GENRES,
    SET_MOVIES,
    Context
} from './store';

import retrieveData from './helpers/retrieve-data';
import mapApiMovieToLocalMovie from './helpers/map-api-movie-to-local-movie';

import {
    API_PATH,
    API_KEY,
    API_GENRES_PATH,
    API_TOP_RATED_PATH,
    LOCAL_STORAGE_GENRES,
    LOCAL_STORAGE_TOP_RATED
} from './constants';

import AppStyled from './AppStyled';

const App = () => {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        const loadFromLocalStorageOrRetrieveData = async (localStorageKey, urlToRetrieveFrom, responseHandler) => {
            if (localStorage.getItem(localStorageKey)) {
                const data = JSON.parse(localStorage.getItem(localStorageKey));
                return data;
            }

            const data = await retrieveData(urlToRetrieveFrom, responseHandler);
            localStorage.setItem(localStorageKey, JSON.stringify(data));
            return data;
        };

        const loadGenres = async () => {
            const genresUrl = `${API_PATH}${API_GENRES_PATH}?api_key=${API_KEY}`;
            const data = await loadFromLocalStorageOrRetrieveData(LOCAL_STORAGE_GENRES, genresUrl, (response) => {
                return response.genres;
            });

            dispatch({ type: SET_GENRES, payload: data});
        };

        const loadTopRatedMovies = async () => {
            const topRatedMoviesUrl = `${API_PATH}${API_TOP_RATED_PATH}?api_key=${API_KEY}`;
            const data = await loadFromLocalStorageOrRetrieveData(LOCAL_STORAGE_TOP_RATED, topRatedMoviesUrl, (response) => {
                const _movies = response.results;
                return _movies.map(mapApiMovieToLocalMovie);
            });

            dispatch({ type: SET_MOVIES, payload: data });
        };

        loadGenres();
        loadTopRatedMovies();
    }, [dispatch]);

    const { isOverlayVisible, isSideBarVisible } = state;

    return (
        <AppStyled>
            { isOverlayVisible && <MovieOverlay /> }
            <NavBar />
            <div className="body">
                { isSideBarVisible && <SideBar /> }
                <Search />
                <MovieList />
            </div>
        </AppStyled>
    );
};

export default App;
