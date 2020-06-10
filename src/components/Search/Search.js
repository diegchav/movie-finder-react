import React, { useContext, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {
    SET_SPINNER_LOADING,
    SEARCH_MOVIES,
    Context
} from '../../store';

import MovieService from '../../services/movie-service';

import SearchStyled from './SearchStyled';

const Search = () => {
    const { dispatch } = useContext(Context);

    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchInput(value);
    };

    const handleSearch = async () => {
        if (searchInput === '') return;

        const query = searchInput.trim();
        dispatch({ type: SET_SPINNER_LOADING });
        const movies = await MovieService.search(query);
        dispatch({ type: SEARCH_MOVIES, payload: { movies, query } });
        dispatch({ type: SET_SPINNER_LOADING });

        setSearchInput('');
    };

    return (
        <SearchStyled>
            <div className="search">
                <input type="text" placeholder="Search movie" value={searchInput} onChange={handleChange} autoFocus />
            </div>
            <IconButton className="search-icon" onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </SearchStyled>
    );
};

export default Search;