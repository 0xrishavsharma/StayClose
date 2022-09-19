import React, { useContext } from 'react';
import Cam from "./../img/cam.png"
import AddUser from "./../img/add.png"
import More from "./../img/more.png"
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className='chat'>
            <div className="chatNav">
                <span>{data.user.displayName}</span>
                <div className="chatNavImgs">
                    <img src={Cam} alt="" />
                    <img src={AddUser} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat