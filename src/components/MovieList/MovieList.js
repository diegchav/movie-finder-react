import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../Movie/Movie';

import {
    API_PATH,
    API_IMAGE_PATH,
    API_KEY,
    LOCAL_STORAGE_TOP_RATED
} from '../../constants';

import MovieListStyled from './MovieListStyled';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

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
                        title: movie.title,
                        image: `${API_IMAGE_PATH}/${movie.poster_path}`
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

    return (
        <MovieListStyled>
        {
            movies.map((movie) => <Movie key={movie.id} {...movie} />)
        }
        </MovieListStyled>
    );
};

export default MovieList;