import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css';
const SignUp = () => {
    const [error, setError] = useState(null)
    const {createUser} = useContext(AuthContext);
    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;
        console.log(email,password,passwordConfirm);
        if(password.length < 6){
            setError('Password should be six charecter or more');
            return;
        }
        if(password !== passwordConfirm){
            setError('Your password did not match');
            return;
        }
        else{
            setError('Successfully sign up')
        }
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=> console.error(error));
    }
    return (
        <div className='form-container'>
            <h2 className="form-title">Sign up</h2>
            <form onSubmit={handleSignUp}>
                <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email"  required/>
                </div>
                <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password"  required/>
                </div>
                <div className="password">
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input type="password" name="passwordConfirm" required/>
                </div>
                <button className='loginbtn'>Sign up</button>
            </form>
            <p  className='link'>Already have an account? <Link to='/logIn'>Please log in</Link></p>
            <p className='text-error'><span>{error}</span></p>
        </div>
    );
};

export default SignUp;