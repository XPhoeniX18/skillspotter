
import React, { useState } from 'react';
import './style.css'; // Import your CSS file

function LoginForm({ toggleRegisterForm }) { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if user exists and credentials match
        if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
            setError('Invalid email or password');
            return;
        }

        // Clear error if login succeeds
        setError('');

        // Proceed with login logic
        console.log('Logging in...');
    };

    return (
        <div className="Register">
            <div className="top">
                <img src={process.env.PUBLIC_URL + '/assets/Logo1.png'} className="logo" alt="Logo" />
                <div className="right">
                    <div className="text">Don’t have an account?</div>
                    <div className="button" onClick={toggleRegisterForm}><p>Register</p></div>
                </div>
            </div>

            <div className="middle">
                <div className="title">We're so happy you're back!</div>

                <div className="container">
                    <div className="input">
                        <div className="text">Email</div>
                        <div className="i">
                            <i className="fa-solid fa-envelope"></i>
                            <input 
                                type="text" 
                                placeholder="Your Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="input">
                        <div className="text">Password</div>
                        <div className="i">
                            <i className="fa-solid fa-lock"></i>
                            <input 
                                type="password" 
                                placeholder="Your Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>

                    {error && <div className="error">{error}</div>}

                    <div className="button" onClick={handleLogin}><p>Log In</p></div>

                    <img src={process.env.PUBLIC_URL + '/assets/logo2.png'} className="logo" alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default LoginForm;