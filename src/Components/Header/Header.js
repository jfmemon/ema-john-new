import React from 'react';
import logo from '../../images/Logo.svg'; 
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header-navigation'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Log In</Link>
                <Link to="/about">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;