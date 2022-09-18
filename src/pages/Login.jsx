import React, { useState } from 'react'
import Register from './Register';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        const userEmail = e.target[0].value;
        const userPassword = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, userEmail, userPassword)
            navigate("/")
        }
        catch (error) {
            setErrMsg(true);
        }
    }

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Stay Close</span>
                <span className="title">Login</span>
                {/* <form onSubmit={handleSubmit}>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    {errMsg && <span>Something went wrong!</span>}
                    <button>Sign in</button>
                </form> */}
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                    {errMsg && <span>Something went wrong</span>}
                </form>
                <p>Don't have an account??
                    <Link to="/register"> Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login