import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons'; // Adjust the icon as needed
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Import your CSS file

function RegisterForm() {
    const [organizationName, setOrganizationName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform validation
        if (!organizationName || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Store user credentials in local storage
        const user = {
            organizationName,
            email,
            password
        };

        localStorage.setItem('user', JSON.stringify(user));

        // Reset form fields after submission
        setOrganizationName('');
        setEmail('');
        setPassword('');
        alert('Signup successful!');
    };
    return (
        <div className="Register">
            <div className="top">
                <img src="/assets/Logo1.png" className="logo" alt="Logo" />
                <div className="right">
                    <div className="text">You already have an account?</div>
                    <div className="button"><p>Login</p></div>
                </div>
            </div>

            <div className="middle">
                <div className="title">Register on our site</div>

                <div className="container">
                <form onSubmit={handleSubmit}></form>
                    <div className="input">
                        <div className="text">Organization Name</div>
                        <div className="i">
                            <FontAwesomeIcon icon={faUsers} />
                            <input
                                    type="text"
                                    value={organizationName}
                                    onChange={(e) => setOrganizationName(e.target.value)}
                                    placeholder="Innovative Thinkers"
                                />
                        </div>
                    </div>

                    <div className="input">
                        <div className="text">Email</div>
                        <div className="i">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@yahoo.com"
                                />
                        </div>
                    </div>

                    <div className="input">
                        <div className="text">Choose Password</div>
                        <div className="i">
                            <FontAwesomeIcon icon={faKey} />
                            <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Minimum 8 characters"
                                />
                        </div>
                    </div>

                    <div className="input">
                        <div className="text">Repeat Password</div>
                        <div className="i">
                            <FontAwesomeIcon icon={faKey} />
                              <input type="password" placeholder="Repeat the same password" />
                        </div>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>By checking this box you agree to our Terms of Service and Privacy Policy.</p>
                    </div>
                    <div className="button"><p>Register</p></div>
                    <img src="/assets/logo2.png" className="logo" alt="Logo" />
                    
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;