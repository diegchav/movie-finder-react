import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieOverlay from './components/MovieOverlay/MovieOverlay';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';

import {
    API_PATH,
    API_IMAGE_PATH,
    API_KEY,
    API_GENRES_PATH,
    API_TOP_RATED_PATH,
    API_SEARCH_PATH,
    LOCAL_STORAGE_GENRES,
    LOCAL_STORAGE_TOP_RATED
} from './constants';

import AppStyled from './AppStyled';

const App = () => {
    const [genres, setGenres] = useState([]);
    const [filteredGenres, setFilteredGenres] = useState(new Set());
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    const retrieveData = async (urlToRetrieveFrom, responseHandler) => {
        let data = [];
        try {
            const axiosResponse = await axios.get(urlToRetrieveFrom);
            data = responseHandler(axiosResponse.data);
        } catch (err) {
            console.error(err);
        }

        return data;
    };

    const mapApiMovieToLocalMovie = (movie) => {
        return {
            id: movie.id,
            image: movie.poster_path ? `${API_IMAGE_PATH}/${movie.poster_path}` : '',
            title: movie.title,
            rate: movie.vote_average,
            release_date: movie.release_date,
            overview: movie.overview,
            genres: movie.genre_ids
        };
    };

    useEffect(() => {
        const loadFromLocalStorageOrRetrieveData = async (localStorageKey, urlToRetrieveFrom, responseHandler) => {
            if (localStorage.getItem(localStorageKey)) {
                const data = JSON.parse(localStorage.getItem(localStorageKey));
                return data;
            }

            const data = await retrieveData(urlToRetrieveFrom, responseHandler);
            localStorage.setItem(localStorageKey, JSON.stringify(data));
            return data;
        };

        const loadGenres = async () => {
            const genresUrl = `${API_PATH}${API_GENRES_PATH}?api_key=${API_KEY}`;
            const data = await loadFromLocalStorageOrRetrieveData(LOCAL_STORAGE_GENRES, genresUrl, (response) => {
                return response.genres;
            });
            setGenres(data);
        };

        const loadTopRatedMovies = async () => {
            const topRatedMoviesUrl = `${API_PATH}${API_TOP_RATED_PATH}?api_key=${API_KEY}`;
            const data = await loadFromLocalStorageOrRetrieveData(LOCAL_STORAGE_TOP_RATED, topRatedMoviesUrl, (response) => {
                const _movies = response.results;
                return _movies.map(mapApiMovieToLocalMovie);
            });
            setMovies(data);
            setFilteredMovies(data);
        };

        loadGenres();
        loadTopRatedMovies();
    }, []);

    const handleSearch = async (searchInput) => {
        if (searchInput === '') return;

        const searchQuery = encodeURI(searchInput.trim());
        const searchUrl = `${API_PATH}${API_SEARCH_PATH}?api_key=${API_KEY}&query=${searchQuery}`;
        const data = await retrieveData(searchUrl, (response) => {
            const _movies = response.results;
            return _movies.map(mapApiMovieToLocalMovie);
        });
        setMovies(data);
        setFilteredMovies(data);
        setFilteredGenres(new Set());
    };

    const handleAddOrRemoveGenreFilter = (genreId) => {
        const newSet = new Set(filteredGenres);
        if (filteredGenres.has(genreId)) {
            newSet.delete(genreId);
        } else {
            newSet.add(genreId);
        }
        setFilteredGenres(newSet);
    };

    const handleApplyFilters = () => {
        let _filteredMovies = [];

        if (filteredGenres.size === 0) {
            _filteredMovies = [...movies];
        } else {
            _filteredMovies = movies.filter((movie) => {
                const { genres } = movie;
                return genres.some((item) => filteredGenres.has(item));
            });
        }

        setFilteredMovies(_filteredMovies);
        setIsSideBarVisible(false);
    };

    const handleOpenOverlay = (movie) => {
        setSelectedMovie(movie);
        setIsOverlayVisible(true);
    };

    const handleCloseOverlay = () => {
        setSelectedMovie(null);
        setIsOverlayVisible(false);
    };

    const handleOpenSideBar = () => {
        setIsSideBarVisible(true);
    };

    const handleCloseSideBar = () => {
        setIsSideBarVisible(false);
    };

    return (
        <AppStyled>
            { isOverlayVisible && <MovieOverlay onClose={handleCloseOverlay} {...selectedMovie} /> }
            <NavBar onOpenSideBar={handleOpenSideBar} />
            { isSideBarVisible &&
                <SideBar
                    onClose={handleCloseSideBar}
                    genres={genres}
                    filteredGenres={filteredGenres}
                    onAddOrRemoveFilter={handleAddOrRemoveGenreFilter}
                    onApplyFilters={handleApplyFilters} />
            }
            <Search onSearch={handleSearch} />
            <MovieList movies={filteredMovies} onOpenOverlay={handleOpenOverlay} />
        </AppStyled>
    );
};

export default App;
