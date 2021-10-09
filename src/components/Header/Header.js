import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth()
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
                <NavLink to="/inventory" activeStyle={ linkStyle }>Manage inventory</NavLink>
                <span style={{color:'white'}}> { user.displayName}</span>
                {
                    user.email ?
                    <button onClick={logOut}>Log Out</button>    
                    :

                    <NavLink to="/login" activeStyle={ linkStyle }>Log In</NavLink> }
            </nav>
        </div>
    );
};

export default Header;