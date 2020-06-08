import loadOrRetrieve from '../helpers/load-or-retrieve';
import retrieveData from '../helpers/retrieve-data';
import mapApiMovieToLocalMovie from '../helpers/map-api-movie-to-local-movie';

import {
    API_PATH,
    API_KEY,
    API_TOP_RATED_PATH,
    API_SEARCH_PATH,
    LOCAL_STORAGE_MOVIES,
} from '../constants';

class MovieService {
    static retrieve = async (page = 1) => {
        const url = `${API_PATH}${API_TOP_RATED_PATH}?api_key=${API_KEY}&page=${page}`;
        const movies = await loadOrRetrieve(LOCAL_STORAGE_MOVIES, url, (response) => {
            const movies = response.results;
            return movies.map(mapApiMovieToLocalMovie);
        });
        return movies;
    }

    static search = async (query, page = 1) => {
        const searchQuery = encodeURI(query);
        const url = `${API_PATH}${API_SEARCH_PATH}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`;
        const movies = await retrieveData(url, (response) => {
            const movies = response.results;
            return movies.map(mapApiMovieToLocalMovie);
        });
        localStorage.setItem(LOCAL_STORAGE_MOVIES, JSON.stringify(movies));
        return movies;
    }

    static load = async (searchQuery, page) => {
        let url = '';
        if (searchQuery === '') {
            url = `${API_PATH}${API_TOP_RATED_PATH}?api_key=${API_KEY}&page=${page}`;
        } else {
            url = `${API_PATH}${API_SEARCH_PATH}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`;
        }

        const movies = await retrieveData(url, (response) => {
            const movies = response.results;
            return movies.map(mapApiMovieToLocalMovie);
        });

        const cachedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MOVIES));
        localStorage.setItem(LOCAL_STORAGE_MOVIES, JSON.stringify([...cachedMovies, ...movies]));

        return movies;
    };
}

export default MovieService;