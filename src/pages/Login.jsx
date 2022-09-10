import React from 'react'
import Register from './Register';

const Login = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Stay Close</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input style={{ display: "none" }} type="file" id='file' />
                    <button>Sign in</button>
                </form>
                <p>You don't have an account?<a href={Register}> Register </a></p>
            </div>
        </div>
    )
}

export default Login