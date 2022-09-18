import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { AuthContext } from "../context/AuthContext"

const Chats = () => {
    // getDoc(doc(db, "chats", user.id))
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);

    // We aren't gonna fetch these chats only once, we are going to update them in real time
    // For that to happen we'll use firebase "onshapshot"

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            }
        }
        currentUser.uid && getChats();
    }, [currentUser.uid])
    console.log(Object.entries(chats))


    return (
        <div className='chats' >
            {Object.entries(chats).map((chat, i) => (
                <div className="userChat" key={chat[0]}>
                    <img src={chat[i].userInfo.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>Ariana Silvia</span>
                        <p>This is going great</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chats