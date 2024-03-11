import React from 'react';
import { Outlet, Link } from "react-router-dom";

import './layout.css';

const Layout = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
};

export default Layout;