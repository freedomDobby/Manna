// import React from 'react';
import {Outlet} from 'react-router-dom';
import Greetings from '../components/layout/Greetings';

const Layout = () => {
    return (
        <div>
        <Greetings/>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};



export default Layout;