import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className="form-title">Sign up</h2>
            <form action="">
                <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
                </div>
                <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
                </div>
                <div className="password">
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input type="password" name="passwordConfirm" id="" required/>
                </div>
                <button className='loginbtn'>Sign up</button>
            </form>
            <p  className='link'>Already have an account? <Link to='/logIn'>Please log in</Link></p>
        </div>
    );
};

export default SignUp;