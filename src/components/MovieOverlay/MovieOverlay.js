import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import {
    CLOSE_OVERLAY,
    Context
} from '../../store';

import MovieOverlayStyled from './MovieOverlayStyled';

const MovieOverlay = () => {
    const { state, dispatch } = useContext(Context);
    const { selectedMovie: { image, title, rate, release_date, overview } } = state;

    const handleClose = () => {
        dispatch({ type: CLOSE_OVERLAY })
    };

    return (
        <MovieOverlayStyled onClick={handleClose}>
            <div className="container-box" onClick={(e) => e.stopPropagation()}>
                <IconButton className="close" onClick={handleClose}>
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
};

export default MovieOverlay;