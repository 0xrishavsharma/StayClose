import React from 'react';
import Avatar from "./../img/img.png"
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Stay Close</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/7418409/pexels-photo-7418409.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <span>Jenny</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar