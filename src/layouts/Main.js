import React from 'react';
import Header from '../Components/Header/Header';
import Shop from '../Components/Shop/Shop';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* ekhane header bade ja thakbe ta shobi outlet er under a thakbe.
             mane outlet a thaka jinisher change hobe. */}
        </div>
    );
};

export default Main;