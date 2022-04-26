import React from 'react';

const Message = ({messages,user}) => {
    return messages.map((message,ind)=>(
            <div key={ind} className='chatmessage ' style={{
                marginLeft:user.uid=== message.uid ?'auto' :'10px',
                backgroundColor:user.uid=== message.uid ?'#0E5EFF':'#FFFFFF'
            }}>
              <div className="namephoto">
                  <img className='imgemail' src={message.photoURL} alt="000"/>
                   <h6>{message.displayName}</h6>
              </div>
                <h5 style={{
                    color:user.uid=== message.uid ? '#FFFFFF':'#000000'
                }}>{message.text}</h5>
            </div>
        ))
};

export default Message;
