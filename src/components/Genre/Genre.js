import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Genre = ({ id, name, isFiltered, onAddOrRemoveFilter }) => {
    return (
        <div>
            <FormControlLabel
                control={<Checkbox style={{ color: 'black' }} checked={isFiltered} onChange={() => onAddOrRemoveFilter(id)} />}
                label={name}
            />
        </div>
    );
};

Genre.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isFiltered: PropTypes.bool,
    onAddOrRemoveFilter: PropTypes.func.isRequired
};

export default Genre;