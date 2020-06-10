// Movie db API
export const API_PATH = 'https://api.themoviedb.org/3';
export const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
export const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
export const API_TOP_RATED_PATH = '/movie/top_rated';
export const API_SEARCH_PATH = '/search/movie';

export const GENRES = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western"
];

// Local storage
export const LOCAL_STORAGE_MOVIES = 'ls_movies';

export const DEFAULT_IMAGE = process.env.PUBLIC_URL + '/default.png';