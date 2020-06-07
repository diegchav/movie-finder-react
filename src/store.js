import React, { createContext, useReducer } from 'react';

// Action types
export const SET_GENRES = 'SET_GENRES';
export const ADD_OR_REMOVE_GENRE_FILTER = 'ADD_OR_REMOVE_GENRE_FILTER';
export const SET_MOVIES = 'SET_MOVIES';
export const FILTER_MOVIES = 'FILTER_MOVIES';
export const OPEN_OVERLAY = 'OPEN_OVERLAY';
export const CLOSE_OVERLAY = 'CLOSE_OVERLAY';
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const SET_SPINNER_LOADING = 'SET_SPINNER_LOADING';

const addOrRemoveGenreFilter = (filteredGenres, genreId) => {
    const newFilteredGenres = new Set(filteredGenres);
    if (filteredGenres.has(genreId)) {
        newFilteredGenres.delete(genreId);
    } else {
        newFilteredGenres.add(genreId);
    }
    return newFilteredGenres;
};

const filterMovies = (movies, filteredGenres) => {
    let filteredMovies = [];

    if (filteredGenres.size === 0) {
        filteredMovies = [...movies];
    } else {
        filteredMovies = movies.filter((movie) => {
            const { genres } = movie;
            return genres.some((item) => filteredGenres.has(item));
        });
    }

    return filteredMovies;
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_GENRES: {
            return { ...state, genres: action.payload };
        }
        case ADD_OR_REMOVE_GENRE_FILTER: {
            return { ...state, filteredGenres: addOrRemoveGenreFilter(state.filteredGenres, action.payload) };
        }
        case SET_MOVIES: {
            return {
                ...state,
                movies: action.payload,
                filteredMovies: action.payload,
                filteredGenres: new Set()
            };
        }
        case FILTER_MOVIES: {
            return {
                ...state,
                filteredMovies: filterMovies(state.movies, state.filteredGenres),
                isSideBarVisible: false
            };
        }
        case OPEN_OVERLAY: {
            return {
                ...state,
                selectedMovie: action.payload,
                isOverlayVisible: true
            }
        }
        case CLOSE_OVERLAY: {
            return {
                ...state,
                selectedMovie: null,
                isOverlayVisible: false
            };
        }
        case OPEN_SIDEBAR: {
            return { ...state, isSideBarVisible: true };
        }
        case CLOSE_SIDEBAR: {
            return { ...state, isSideBarVisible: false };
        }
        case SET_SPINNER_LOADING:
            return { ...state, isSpinnerLoading: !state.isSpinnerLoading }
        default:
            return state;
    }
};

const initialState = {
    genres: [],
    filteredGenres: new Set(),
    movies: [],
    filteredMovies: [],
    selectedMovie: null,
    isOverlayVisible: false,
    isSideBarVisible: false,
    isSpinnerLoading: false
};

export const Context = createContext();

export const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    );
};