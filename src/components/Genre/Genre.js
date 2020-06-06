import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Genre = ({ id, name }) => {
    const handleChange = (e) => {};

    return (
        <div>
            <FormControlLabel
                control={<Checkbox style={{ color: 'black' }} checked={false} onChange={handleChange} name={`genre-${id}`} />}
                label={name}
            />
        </div>
    );
};

Genre.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default Genre;