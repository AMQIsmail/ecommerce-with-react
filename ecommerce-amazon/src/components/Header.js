import React, { Fragment } from 'react';
import logo from '../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <Fragment>
            <div className='header'>
                <img src={logo} alt=""/>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Manage</a>
                </nav>
            </div>
        </Fragment>        
    );
};

export default Header;