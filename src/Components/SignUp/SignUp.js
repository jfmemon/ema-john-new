import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { AuthContext } from '../../Contexts/UserContext';
const SignUp = () => {
    const [error, setError] = useState(null);
    const {signUp} = useContext(AuthContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setError();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);
        
        if(password !== confirmPassword) {
            setError('Password must be same.');
            return;
        }

        if(password.length < 6) {
            setError('Password should be 6 or more character.');
            return;
        }

        signUp(email, password)
        .then(result => {
            const user = result.user;
        })
        .catch(error => {
            console.error('Error: ', error)
        })

    }

    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign Up</h3>
            <form onSubmit={handleFormSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? Please <Link to='/login'>login</Link></p>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default SignUp;