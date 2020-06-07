import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
    OPEN_OVERLAY,
    Context
} from '../../store';

import MovieStyled from './MovieStyled';

const Movie = ({ movie }) => {
    const { dispatch } = useContext(Context);

    const { image, title, rate, overview } = movie;

    return (
        <MovieStyled>
            <img src={image} alt={title} onClick={() => dispatch({ type: OPEN_OVERLAY, payload: movie })} />
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
    }).isRequired
};

export default Movie;