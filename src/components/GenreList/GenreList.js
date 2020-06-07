import React, { useContext } from 'react';

import Genre from '../Genre/Genre';

import {
    Context
} from '../../store';

import GenreListStyled from './GenreListStyled';

const GenreList = () => {
    const { state } = useContext(Context);
    const { genres, filteredGenres } = state;

    return (
        <GenreListStyled>
            <h1 className="title">Genres</h1>
            <div className="genres">
            {
                genres.map((genre) => (
                    <Genre
                        key={genre.id}
                        isFiltered={filteredGenres.has(genre.id)}
                        {...genre}
                    />
                ))
            }
            </div>
        </GenreListStyled>
    );
};

export default GenreList;