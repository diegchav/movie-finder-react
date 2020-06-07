import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {
    ADD_OR_REMOVE_GENRE_FILTER,
    Context
} from '../../store';

const Genre = ({ id, name, isFiltered }) => {
    const { dispatch } = useContext(Context);

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        style={{ color: 'black' }}
                        checked={isFiltered}
                        onChange={() => dispatch({ type: ADD_OR_REMOVE_GENRE_FILTER, payload: id })} />
                }
                label={name}
            />
        </div>
    );
};

Genre.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isFiltered: PropTypes.bool
};

export default Genre;