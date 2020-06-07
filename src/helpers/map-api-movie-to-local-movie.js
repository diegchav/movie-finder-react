import {
    API_IMAGE_PATH,
    DEFAULT_IMAGE
} from '../constants';

export default (movie) => {
    return {
        id: movie.id,
        image: movie.poster_path ? `${API_IMAGE_PATH}/${movie.poster_path}` : DEFAULT_IMAGE,
        title: movie.title,
        rate: movie.vote_average,
        release_date: movie.release_date,
        overview: movie.overview,
        genres: movie.genre_ids
    };
};