import React from 'react';
import PropTypes from 'prop-types';

import Genre from '../Genre/Genre';

import GenreListStyled from './GenreListStyled';

const GenreList = ({ genres, filteredGenres, onAddOrRemoveFilter }) => {return (
        <GenreListStyled>
            <h1 className="title">Genres</h1>
            <div className="genres">
            {
                genres.map((genre) => (
                    <Genre
                        key={genre.id}
                        isFiltered={filteredGenres.has(genre.id)}
                        onAddOrRemoveFilter={onAddOrRemoveFilter}
                        {...genre}
                    />
                ))
            }
            </div>
        </GenreListStyled>
    );
};

GenreList.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    filteredGenres: PropTypes.instanceOf(Set).isRequired,
    onAddOrRemoveFilter: PropTypes.func.isRequired
};

export default GenreList;