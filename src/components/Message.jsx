import React, { useContext } from 'react';
import { ChatContext } from "../context/ChatContext"

const Message = ({ message }) => {
    const { data } = useContext(ChatContext);
    console.log(message);

    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src={data.user.photoURL} alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <span>this</span>
                <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            </div>
        </div>
    )
}

export default Message