import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';

import AppStyled from './AppStyled';

const App = () => (
  <AppStyled>
    <NavBar />
    <Search />
  </AppStyled>
);

export default App;
