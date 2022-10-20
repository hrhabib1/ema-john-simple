import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
const LogIn = () => {
    return (
        <div className='form-container'>
            <h2 className="form-title">Login</h2>
            <form action="">
                <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
                </div>
                <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
                </div>
                <button className='loginbtn'>Login</button>
            </form>
            <p  className='link'>Are you new? <Link to='/signUp'>Please sign up</Link></p>
        </div>
    );
};

export default LogIn;