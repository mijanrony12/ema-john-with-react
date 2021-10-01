import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const linkStyle = {
        background:'white',
        color: 'black'
    }
    return (
        <div className="header">
            <img src={ logo } alt="" />
            <nav>
                    <NavLink to="/shop" activeStyle={linkStyle}>Shop</NavLink>
                    <NavLink to="/review" activeStyle={linkStyle}>Order Review</NavLink>
                    <NavLink to="/inventory" activeStyle={linkStyle}>Manage inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;