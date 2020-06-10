import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {
    ADD_OR_REMOVE_GENRE_FILTER,
    Context
} from '../../store';

import GenreStyled from './GenreStyled';

const Genre = ({ id, name, isFiltered }) => {
    const { dispatch } = useContext(Context);

    return (
        <GenreStyled>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isFiltered}
                        onChange={() => dispatch({ type: ADD_OR_REMOVE_GENRE_FILTER, payload: id })} />
                }
                label={name}
            />
        </GenreStyled>
    );
};

Genre.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isFiltered: PropTypes.bool
};

export default Genre;