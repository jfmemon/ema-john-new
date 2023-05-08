import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='header-navigation'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <button className='btn-logOut' onClick={logOut}>LogOut</button> :
                        <>
                            <Link to="/login">Log In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }

            </div>
        </nav>
    );
};

export default Header;