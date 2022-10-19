import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
       <nav className='header'>
          <img src={logo} alt="" />
          <div>
            <Link to="/order">Order</Link>
            <Link to="/order_review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/">Shop</Link>
            <Link to="/logIn">LogIn</Link>
            <Link to="/signUp">SignUp</Link>
          </div>
       </nav>
    );
};

export default Header;