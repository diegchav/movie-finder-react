import React from 'react';
import PropTypes from 'prop-types';

import MovieStyled from './MovieStyled';

const Movie = ({ movie, onOpenOverlay }) => {
    const { image, title, release_date, rate, overview } = movie;

    return (
        <MovieStyled onClick={() => onOpenOverlay(movie)}>
            <div className="image">
            {
                image
                ? <img src={image} alt={title} />
                : <span>{title}</span>
            }
            </div>
            <div className="content">
                <div className="header">
                    <div className="title-date">
                        <span className="title">{title}</span>
                        <dspan className="date">{release_date}</dspan>
                    </div>
                    <span className="rate">
                        {rate}
                    </span>
                </div>
                <div className="overview">
                    {overview}
                </div>
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