import React, { useContext } from 'react';

import Movie from '../Movie/Movie';

import { Context } from '../../store';

import MovieListStyled from './MovieListStyled';

const MovieList = () => {
    const { state } = useContext(Context);
    const { filteredMovies: movies } = state;

    return (
        <MovieListStyled>
        {
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        }
        </MovieListStyled>
    );
};

export default MovieList;