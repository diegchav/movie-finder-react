import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';

import AppStyled from './AppStyled';

const App = () => (
  <AppStyled>
    <NavBar />
    <Search />
    <MovieList />
  </AppStyled>
);

export default App;
