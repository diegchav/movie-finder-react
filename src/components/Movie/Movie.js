import React from 'react';
import PropTypes from 'prop-types';

import MovieStyled from './MovieStyled';

const Movie = ({ movie, onOpenOverlay }) => {
    const { image, title, rate, overview } = movie;

    return (
        <MovieStyled>
            <div className="image">
                <img src={image} alt={title} onClick={() => onOpenOverlay(movie)} />
            </div>
            <div className="content">
                <div className="header">
                    <span className="title">{title}</span>
                    <span className="rate">{rate}</span>
                </div>
                <div className="overview">{overview}</div>
            </div>
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