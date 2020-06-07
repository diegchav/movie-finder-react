import React from 'react';
import PropTypes from 'prop-types';

import MovieStyled from './MovieStyled';

const Movie = ({ movie, onOpenOverlay }) => {
    const { image, title } = movie;

    return (
        <MovieStyled onClick={() => onOpenOverlay(movie)}>
            {
                image
                ? <img src={image} alt={title} />
                : <span>{title}</span>
            }
        </MovieStyled>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    }).isRequired,
    onOpenOverlay: PropTypes.func.isRequired
};

export default Movie;