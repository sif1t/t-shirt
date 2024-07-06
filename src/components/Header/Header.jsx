import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to="/">Home</Link>
                <Link to="/review">order review</Link>
                <Link to="/grandpa">Grandpa</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;