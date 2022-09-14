import React from 'react'

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <span>This is going great</span>
                <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            </div>
        </div>
    )
}

export default Message