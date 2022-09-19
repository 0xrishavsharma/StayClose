import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
    // getDoc(doc(db, "chats", user.id))
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

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

    const contactClick = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u })
    }


    return (
        <div className='chats' >
            {Object.entries(chats)?.map((chat, i) => (
                <div className="userChat" key={chat[0]} onClick={() => contactClick(chat[1].userInfo)}>
                    <img src={chat[1].userInfo.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chats