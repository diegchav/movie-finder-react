import React, { useContext } from 'react';

import Movie from '../Movie/Movie';

import {
    LOAD_MOVIES,
    Context
} from '../../store';

import MovieService from '../../services/movie-service';

import MovieListStyled from './MovieListStyled';

const MovieList = () => {
    const { state, dispatch } = useContext(Context);
    const { filteredMovies: movies, currentPage, searchedMovie } = state;

    const handleLoad = async () => {
        const movies = await MovieService.load(searchedMovie, currentPage);
        dispatch({ type: LOAD_MOVIES, payload: movies });
    };

    return (
        <MovieListStyled>
            { movies.map((movie) => <Movie key={movie.id} movie={movie} />) }
            <button
                style={{ display: movies.length !== 0 ? 'inline-block' : 'none' }}
                className="load-more"
                onClick={handleLoad}
            >
                Load more
            </button>
        </MovieListStyled>
    );
};

export default MovieList;