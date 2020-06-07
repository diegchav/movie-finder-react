import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import SearchStyled from './SearchStyled';

const Search = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchInput(value);
    };

    const handleSearch = () => {
        onSearch(searchInput);
        setSearchInput('');
    };

    return (
        <SearchStyled>
            <input type="text" placeholder="Search movie" value={searchInput} onChange={handleChange} autoFocus />
            <IconButton onClick={handleSearch}>
                <SearchIcon style={{ color: 'black' }} />
            </IconButton>
        </SearchStyled>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default Search;