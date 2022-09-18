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

                <span>{currentUser.displayName}</span>

                <span>{currentUser.userEmail}</span>

                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar