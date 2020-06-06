import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../Movie/Movie';

import MovieListStyled from './MovieListStyled';

const MovieList = ({ movies, onOpenOverlay }) => {
    return (
        <MovieListStyled>
        {
            movies.map((movie) => <Movie key={movie.id} movie={movie} onOpenOverlay={onOpenOverlay} />)
        }
        </MovieListStyled>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    })).isRequired,
    onOpenOverlay: PropTypes.func.isRequired
};

export default MovieList;