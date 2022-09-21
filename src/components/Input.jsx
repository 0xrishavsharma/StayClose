import React, { useState } from 'react';
import FileImg from "../img/img.png"
import Attach from "../img/attach.png"
import { arrayUnion, doc, serverTimestamp, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../context/AuthContext';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);

    const handleSend = async () => {

        if (img) {
            // If there is a img then first upload it and then send it
            const storageRef = ref(storage, uuid()); // Here we can give anything unique instead of "uuid" it can be timestamp as well but should be something unique
            const uploadTask = uploadBytesResumable(storageRef, img)
            uploadTask.on(
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(storageRef).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                // Here we'll pass our message 
                                // We'll give a unique id to our message to identify it while displaying on the UI
                                // We'll make use of "UUID" library to give this unique id to the messages
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                data: Timestamp.now(),
                                img: downloadURL
                            })
                        })

                    });
                }
            )
        } else {
            // If there is not img, just send the text
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    // Here we'll pass our message 
                    // We'll give a unique id to our message to identify it while displaying on the UI
                    // We'll make use of "UUID" library to give this unique id to the messages
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    data: Timestamp.now(),
                })
            })
        }

        // Storing the latest message on the firebase "db" for both users
        // 1.For the currentUser
        updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".latestMessage"]: { text },
            [data.chatId + ".date"]: serverTimestamp(),
        })

        // 2.For the other user
        updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".latestMessage"]: { text },
            [data.chatId + ".date"]: serverTimestamp(),
        })

        setImg(null)
        setText("")


    }
    return (
        <div className='input'>
            <input type="text" placeholder='Type something...' value={text} onChange={(e) => setText(e.target.value)} />
            <div className="inputOptions">
                <img src={Attach} alt="" />
                <input type="file" style={{ display: "none" }} id="file" onChange={(e) => setImg(e.target.files[0])} accept=".png, .jpeg, .jpg, .webp" />
                <label htmlFor="file">
                    <img src={FileImg} alt="" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Input