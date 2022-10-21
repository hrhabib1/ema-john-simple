import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './LogIn.css';
const LogIn = () => {
    const [error, setError] = useState(null)
    const {createSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        if(password.length < 6){
            setError('Password should be six charecter or more');
            return;
        }
        else{
            setError('Successfully sign In')
        }
        createSignIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/');
        })
        .catch(error=> console.error(error));
    }
    return (
        <div className='form-container'>
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required/>
                </div>
                <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required/>
                <p className='link'>{error}</p>
                </div>
                <button className='loginbtn'>Login</button>
            </form>
            <p  className='link'>Are you new? <Link to='/signUp'>Please sign up</Link></p>
        </div>
    );
};

export default LogIn;