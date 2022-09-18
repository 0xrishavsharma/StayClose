import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

const Search = () => {

    const [userName, setUserName] = useState(null)
    const [user, setUser] = useState(null)

    const { currentUser } = useContext(AuthContext)

    const keyDown = (e) => {
        if (e.code === "Enter") {
            handleQuery();
        }
    }
    // Creating and executing query
    const handleQuery = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", userName));

        // Executing query
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setUser(doc.data())
        });
    }

    // Open create chat for query returned user
    const openChat = async () => {

        // If their is previous chat available then open it, otherwise, create a new one!
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                //create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

            }
        } catch (err) { }
        setUser(null)
        setUserName("")
    }
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" value={userName} placeholder='Find a member...' onChange={(e) => setUserName(e.target.value)} onKeyDown={keyDown} />
                {/* {console.log("After the input element", userName)} */}
            </div>
            {user ? <div className="userChat" onClick={openChat} style={{ cursor: "pointer" }} id="userChat">
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div> : ""}
        </div>
    )
}

export default Search