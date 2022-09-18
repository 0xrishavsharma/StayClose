import React, { useContext } from 'react';
import Avatar from "./../img/img.png"
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
<<<<<<< HEAD
    const { currentUser } = useContext(AuthContext)
=======
    const currentUser = useContext(AuthContext)
>>>>>>> 42f5d40c202d7c9bb75a46415f72e78a2206d262
    return (
        <div className='navbar'>
            <span className="logo">Stay Close</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
<<<<<<< HEAD
                {console.log("currentUser from navbar:", currentUser.photoURL)}
                <span>{currentUser.displayName}</span>
=======
                <span>{currentUser.userEmail}</span>
                {/* {console.log(currentUser.email)} */}
>>>>>>> 42f5d40c202d7c9bb75a46415f72e78a2206d262
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar