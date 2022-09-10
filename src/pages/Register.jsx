import React from 'react';
import addAvatar from "../img/addAvatar.png"
import Login from './Login';

const Register = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Stay Close</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input style={{ display: "none" }} type="file" id='file' />
                    <label style={{ cursor: "pointer" }} htmlFor="file">
                        <img src={addAvatar} alt="" />
                        <span>Choose your avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? <a href={Login}> Login</a></p>
            </div>
        </div>
    )
}

export default Register