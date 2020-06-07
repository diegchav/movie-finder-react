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
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    useEffect(() => {
        const loadFromLocalStorageOrRetrieve = async (localStorageKey, urlToRetrieveFrom, responseHandler) => {
            if (localStorage.getItem(localStorageKey)) {
                const data = JSON.parse(localStorage.getItem(localStorageKey));
                return data;
            }

            try {
                const axiosResponse = await axios.get(urlToRetrieveFrom);
                const data = responseHandler(axiosResponse.data);
                localStorage.setItem(localStorageKey, JSON.stringify(data));
                return data;
            } catch (err) {
                console.error(err);
            }
        };

        const loadGenres = async () => {
            const genresUrl = `${API_PATH}${API_GENRES_PATH}?api_key=${API_KEY}`;
            const data = await loadFromLocalStorageOrRetrieve(LOCAL_STORAGE_GENRES, genresUrl, (response) => {
                return response.genres;
            });
            setGenres(data);
        };

        const loadTopRatedMovies = async () => {
            const topRatedMoviesUrl = `${API_PATH}${API_TOP_RATED_PATH}?api_key=${API_KEY}`;
            const data = await loadFromLocalStorageOrRetrieve(LOCAL_STORAGE_TOP_RATED, topRatedMoviesUrl, (response) => {
                const _movies = response.results;
                return _movies.map((movie) => (
                    {
                        id: movie.id,
                        image: `${API_IMAGE_PATH}/${movie.poster_path}`,
                        title: movie.title,
                        rate: movie.vote_average,
                        release_date: movie.release_date,
                        overview: movie.overview
                    }
                ));
            });
            setMovies(data);
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
