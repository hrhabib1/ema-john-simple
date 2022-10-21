import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
   const {user, logOut} = useContext(AuthContext)
    return (
       <nav className='header'>
          <img src={logo} alt="" />
          <div>
            <Link to="/order">Order</Link>
            <Link to="/order_review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/">Shop</Link>
            {  user?.uid?
                <button onClick={logOut} className='btn-logOut'>Log out</button>
               :<><Link to="/logIn">LogIn</Link>
            <Link to="/signUp">SignUp</Link></>}
              <span>{user?.email}</span>
          </div>
       </nav>
    );
};

export default Header;