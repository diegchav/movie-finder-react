import React from 'react';

import SideBar from '../SideBar/SideBar';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import MovieList from '../MovieList/MovieList';

import BodyStyled from './BodyStyled';

const Body = () => (
    <BodyStyled>
        <SideBar />
        <div className="filters">
            <Filter />
        </div>
        <div className="main">
            <Search />
            <MovieList />
        </div>
    </BodyStyled>
);

export default Body;