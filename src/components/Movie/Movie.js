import React from 'react';
import PropTypes from 'prop-types';

import MovieStyled from './MovieStyled';

const Movie = ({ title, image }) => (
    <MovieStyled>
        <img src={image} alt={title} />
    </MovieStyled>
);

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Movie;