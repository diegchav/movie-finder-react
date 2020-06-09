import React, { createContext, useReducer } from 'react';

// Action types
export const SET_GENRES = 'SET_GENRES';
export const ADD_OR_REMOVE_GENRE_FILTER = 'ADD_OR_REMOVE_GENRE_FILTER';
export const SET_MOVIES = 'SET_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SET_SEARCHED_MOVIE = 'SET_SEARCHED_MOVIE';
export const FILTER_MOVIES = 'FILTER_MOVIES';
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const OPEN_OVERLAY = 'OPEN_OVERLAY';
export const CLOSE_OVERLAY = 'CLOSE_OVERLAY';
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const SET_SPINNER_LOADING = 'SET_SPINNER_LOADING';
export const SET_LOADING_MOVIES = 'SET_LOADING_MOVIES';

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
                filteredGenres: new Set(),
                currentPage: 2
            };
        }
        case FILTER_MOVIES: {
            return {
                ...state,
                filteredMovies: filterMovies(state.movies, state.filteredGenres),
                isSideBarVisible: false
            };
        }
        case SEARCH_MOVIES: {
            return {
                ...state,
                movies: action.payload.movies,
                filteredMovies: action.payload.movies,
                filteredGenres: new Set(),
                searchedMovie: action.payload.query,
                currentPage: 2
            };
        }
        case LOAD_MOVIES: {
            return {
                ...state,
                movies: [...state.movies, ...action.payload],
                filteredMovies: [...state.filteredMovies, ...filterMovies(action.payload, state.filteredGenres)],
                currentPage: state.currentPage + 1
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
            return { ...state, isSpinnerLoading: !state.isSpinnerLoading };
        case SET_LOADING_MOVIES: {
            return { ...state, isLoadingMovies: !state.isLoadingMovies };
        }
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
    currentPage: 1,
    searchedMovie: '',
    isOverlayVisible: false,
    isSideBarVisible: false,
    isSpinnerLoading: false,
    isLoadingMovies: false
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