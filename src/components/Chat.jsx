import React from 'react';
import Cam from "./../img/cam.png"
import AddUser from "./../img/add.png"
import More from "./../img/more.png"

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatNav">
                <span>Jane</span>
                <div className="chatNavImgs">
                    <img src={Cam} alt="" />
                    <img src={AddUser} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Chat