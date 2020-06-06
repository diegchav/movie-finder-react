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
    LOCAL_STORAGE_GENRES,
    LOCAL_STORAGE_TOP_RATED
} from './constants';

import AppStyled from './AppStyled';

const App = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [isSideBarVisible, setIsSideBarVisible] = useState(true);

    useEffect(() => {
        const loadGenres = async () => {
            if (localStorage.getItem(LOCAL_STORAGE_GENRES)) {
                const _genres = JSON.parse(localStorage.getItem(LOCAL_STORAGE_GENRES));
                setGenres(_genres);
                return;
            }

            try {
                const genresUrl = `${API_PATH}${API_GENRES_PATH}?api_key=${API_KEY}`;
                const axiosResponse = await axios.get(genresUrl);
                const _genres = axiosResponse.data.genres;
                setGenres(_genres);
                localStorage.setItem(LOCAL_STORAGE_GENRES, JSON.stringify(_genres));
            } catch (err) {
                console.error(err);
            }
        };

        const loadTopRatedMovies = async () => {
            if (localStorage.getItem(LOCAL_STORAGE_TOP_RATED)) {
                const _movies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOP_RATED));
                setMovies(_movies);
                return;
            }

            try {
                const topRatedMoviesUrl = `${API_PATH}${API_TOP_RATED_PATH}?api_key=${API_KEY}`;
                const axiosResponse = await axios.get(topRatedMoviesUrl);
                const results = axiosResponse.data.results;
                const _movies = results.map((movie) => (
                    {
                        id: movie.id,
                        image: `${API_IMAGE_PATH}/${movie.poster_path}`,
                        title: movie.title,
                        rate: movie.vote_average,
                        release_date: movie.release_date,
                        overview: movie.overview
                    }
                ));
                setMovies(_movies);
                localStorage.setItem(LOCAL_STORAGE_TOP_RATED, JSON.stringify(_movies));
            } catch (err) {
                console.error(err);
            }
        };

        loadGenres();
        loadTopRatedMovies();
    }, []);

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
            { isSideBarVisible && <SideBar onClose={handleCloseSideBar} genres={genres} /> }
            <Search />
            <MovieList movies={movies} onOpenOverlay={handleOpenOverlay} />
        </AppStyled>
    );
};

export default App;
