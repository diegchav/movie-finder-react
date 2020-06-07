# Movie Finder

SPA page application to search for movies using the [The Movie Database API](https://developers.themoviedb.org).

## Technologies used

- React
- React Hooks
- Axios
- Styled Components

## Setup project

Clone repo:

```
git clone https://github.com/diegchav/movie-finder-react.git
cd movie-finder-react
```

Install dependendies:

```
yarn install
```

## Run project

First request an API key by following the instructions at [TMDb](https://developers.themoviedb.org/3/getting-started/introduction).

Then, create an .env file under the root directory and set the API key variable:

```
// .env
REACT_APP_MOVIE_DB_API_KEY=<your_key>
```

Finally, start the application:

```
yarn start
```
