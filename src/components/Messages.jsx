import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase';
import Message from './Message'

const Messages = () => {

    const { data } = useContext(ChatContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMsgs = () => {
            const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
                doc.exists() && setMessages(doc.data().messages);
            })
            return () => {
                unsub()
            }
        }
        data.chatId && getMsgs();
    }, [data.chatId])
    // console.log("ChatId", data.chatId)
    // console.log("User UID", data.user.uid)
    return (
        <div className='messages' >
            {messages.map((message, i) => (
                <Message message={message} key={message.id} />
            ))}
        </div>
    )
}

export default Messages