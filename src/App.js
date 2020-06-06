import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieOverlay from './components/MovieOverlay/MovieOverlay';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';

import {
    API_PATH,
    API_IMAGE_PATH,
    API_KEY,
    LOCAL_STORAGE_TOP_RATED
} from './constants';

import AppStyled from './AppStyled';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    useEffect(() => {
        const loadTopRatedMovies = async () => {
            if (localStorage.getItem(LOCAL_STORAGE_TOP_RATED)) {
                const _movies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOP_RATED));
                setMovies(_movies);
                return;
            }

            try {
                const topRatedMoviesUrl = `${API_PATH}/movie/top_rated?api_key=${API_KEY}`;
                const axiosResponse = await axios.get(topRatedMoviesUrl);
                const topRatedMovies = axiosResponse.data.results;
                const _movies = topRatedMovies.map((movie) => (
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

    return (
        <AppStyled>
            { isOverlayVisible && <MovieOverlay onClose={handleCloseOverlay} {...selectedMovie} /> }
            <NavBar />
            <Search />
            <MovieList movies={movies} onOpenOverlay={handleOpenOverlay} />
        </AppStyled>
    );
};

export default App;
