import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

import './layout.css';

const Layout = () => {
    const navigate = useNavigate();
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
                <li>
                    <button onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/');
                    }}>Logout</button>
                </li>
            </ul>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
};

export default Layout;