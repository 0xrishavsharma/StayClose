import React, { useEffect, useState } from 'react';
import addAvatar from "../img/addAvatar.png"
import Login from './Login';



const Register = () => {
    // const [countryData, setCountryData] = useState([])
    // fetch(`https://restcountries.com/v3.1/all`)
    //     .then(res => res.json())
    //     .then(data => setCountryData(data))
    //     .catch(err => console.log(`We faces an error: ${err}`))
    // console.log(countryData)
    // console.log("Hello")

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Stay Close</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    {/* <select>
                        {
                            countryData.map((country, i) => {
                                return (
                                    <option value="AL">{i}</option>
                                )
                            })
                        }
                    </select> */}
                    <input type="password" placeholder='Password' />
                    <input style={{ display: "none" }} type="file" id='file' />
                    <label style={{ cursor: "pointer" }} htmlFor="file">
                        <img src={addAvatar} alt="" />
                        <span>Choose your avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? <a href=""> Login</a></p>
            </div>
        </div>
    )
}

export default Register