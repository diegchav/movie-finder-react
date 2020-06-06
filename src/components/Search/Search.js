import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import SearchStyled from './SearchStyled';

const Search = () => (
    <SearchStyled>
        <input type="text" placeholder="Search movie" autoFocus />
        <IconButton>
            <SearchIcon style={{ color: 'black' }} />
        </IconButton>
    </SearchStyled>
);

export default Search;