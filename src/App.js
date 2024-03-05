import React, { useState } from 'react';
import RegisterForm from './components/RegisterPage/RegisterForm';
import LoginForm from './components/LoginPage/LoginForm';

function App() {
    /*const [showRegisterForm, setShowRegisterForm] = useState(false);

    const toggleRegisterForm = () => {
        setShowRegisterForm(!showRegisterForm);
    };*/

    return (
        /*<div className="App">
            {showRegisterForm ? (
                <RegisterForm />
            ) : (
                <LoginForm toggleRegisterForm={toggleRegisterForm} />
            )}
        </div>*/
        <div className="App">
            <RegisterForm />
            </div>
        );
}

export default App;