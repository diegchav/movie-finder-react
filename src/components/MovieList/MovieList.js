import React, { useContext, useRef } from 'react';

import Movie from '../Movie/Movie';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

import {
    SET_LOADING_MOVIES,
    LOAD_MOVIES,
    Context
} from '../../store';

import MovieService from '../../services/movie-service';

import MovieListStyled from './MovieListStyled';

const MovieList = () => {
    const { state, dispatch } = useContext(Context);
    const { filteredMovies: movies, currentPage, searchedMovie, isLoadingMovies } = state;

    const divRef = useRef();

    const _scrollToLoad = 50;

    const handleLoadMovies = async (page) => {
        dispatch({ type: SET_LOADING_MOVIES });
        const movies = await MovieService.load(searchedMovie, page);
        dispatch({ type: LOAD_MOVIES, payload: movies });
        dispatch({ type: SET_LOADING_MOVIES });
    };

    return (
        <MovieListStyled ref={divRef}>
            <InfiniteScroll childRef={divRef} scrollOffset={_scrollToLoad} onScroll={() => handleLoadMovies(currentPage)} shouldScroll={!isLoadingMovies}>
                { movies.map((movie) => <Movie key={movie.id} movie={movie} />) }
            </InfiniteScroll>
        </MovieListStyled>
    );
};

export default MovieList;