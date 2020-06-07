import React, { useContext, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {
    SET_MOVIES,
    Context
} from '../../store';

import retrieveData from '../../helpers/retrieve-data';
import mapApiMovieToLocalMovie from '../../helpers/map-api-movie-to-local-movie';

import {
    API_PATH,
    API_SEARCH_PATH,
    API_KEY
} from '../../constants';

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

        const searchQuery = encodeURI(searchInput.trim());
        const searchUrl = `${API_PATH}${API_SEARCH_PATH}?api_key=${API_KEY}&query=${searchQuery}`;
        const data = await retrieveData(searchUrl, (response) => {
            const movies = response.results;
            return movies.map(mapApiMovieToLocalMovie);
        });

        dispatch({ type: SET_MOVIES, payload: data });

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