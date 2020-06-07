import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import MovieOverlayStyled from './MovieOverlayStyled';

const MovieOverlay = ({ image, title, rate, release_date, overview, onClose }) => (
    <MovieOverlayStyled onClick={() => onClose()}>
        <div className="container-box" onClick={(e) => e.stopPropagation()}>
            <IconButton className="close" onClick={() => onClose()}>
                <CancelIcon />
            </IconButton>
            <img src={image} alt={title} />
            <div className="header">
                <div className="title-date">
                    <span className="title">{title}</span>
                    <span className="date">{release_date}</span>
                </div>
                <span className="rate">{rate}</span>
            </div>
            <div className="overview">
                {overview}
            </div>
            <div className="actions">
                <button className="offline">Watch Offline</button>
                <button className="online">Watch Online</button>
            </div>
        </div>
    </MovieOverlayStyled>
);

MovieOverlay.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default MovieOverlay;