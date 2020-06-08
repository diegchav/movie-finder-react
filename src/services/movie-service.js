import loadOrRetrieve from '../helpers/load-or-retrieve';
import retrieveData from '../helpers/retrieve-data';
import mapApiMovieToLocalMovie from '../helpers/map-api-movie-to-local-movie';

import {
    API_PATH,
    API_KEY,
    API_GENRES_PATH,
    API_TOP_RATED_PATH,
    API_SEARCH_PATH,
    LOCAL_STORAGE_GENRES,
    LOCAL_STORAGE_TOP_RATED,
} from '../constants';

class MovieService {
    static loadGenres = async () => {
        const genresUrl = `${API_PATH}${API_GENRES_PATH}?api_key=${API_KEY}`;
        const data = await loadOrRetrieve(LOCAL_STORAGE_GENRES, genresUrl, (response) => {
            return response.genres;
        });
        return data;
    }

    static loadTopRatedMovies = async () => {
        const topRatedMoviesUrl = `${API_PATH}${API_TOP_RATED_PATH}?api_key=${API_KEY}`;
        const data = await loadOrRetrieve(LOCAL_STORAGE_TOP_RATED, topRatedMoviesUrl, (response) => {
            const movies = response.results;
            return movies.map(mapApiMovieToLocalMovie);
        });
        return data;
    }

    static searchMovies = async (search) => {
        const searchQuery = encodeURI(search.trim());
        const searchUrl = `${API_PATH}${API_SEARCH_PATH}?api_key=${API_KEY}&query=${searchQuery}`;
        const data = await retrieveData(searchUrl, (response) => {
            const movies = response.results;
            return movies.map(mapApiMovieToLocalMovie);
        });
        return data;
    }
}

export default MovieService;