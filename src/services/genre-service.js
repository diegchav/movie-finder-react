import loadOrRetrieve from '../helpers/load-or-retrieve';

import {
    API_PATH,
    API_KEY,
    API_GENRES_PATH,
    LOCAL_STORAGE_GENRES
} from '../constants';

class GenreService {
    static retrieve = async () => {
        const url = `${API_PATH}${API_GENRES_PATH}?api_key=${API_KEY}`;
        const genres = await loadOrRetrieve(LOCAL_STORAGE_GENRES, url, (response) => {
            return response.genres;
        });
        return genres;
    }
}

export default GenreService;