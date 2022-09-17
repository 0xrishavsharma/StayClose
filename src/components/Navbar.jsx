import React, { useContext } from 'react';
import Avatar from "./../img/img.png"
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className='navbar'>
            <span className="logo">Stay Close</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                {console.log("currentUser from navbar:", currentUser.photoURL)}
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar