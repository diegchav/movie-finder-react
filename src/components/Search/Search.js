import React, { useContext, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {
    SET_SPINNER_LOADING,
    SET_MOVIES,
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

        dispatch({ type: SET_SPINNER_LOADING });
        const movies = await MovieService.searchMovies(searchInput);
        dispatch({ type: SET_MOVIES, payload: movies });
        dispatch({ type: SET_SPINNER_LOADING });

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

export default Search;