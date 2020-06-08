import React from 'react';

import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

import BodyStyled from './BodyStyled';

const Body = () => (
    <BodyStyled>
        <SideBar />
        <Main />
    </BodyStyled>
);

export default Body;