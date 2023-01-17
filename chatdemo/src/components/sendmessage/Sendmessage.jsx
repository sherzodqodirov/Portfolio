import React from 'react';
import attachment from '../../assets/attachment.svg';
import smalicon from '../../assets/smalicon.svg';
import sendicon from '../../assets/sendicon.svg';
import {useDispatch} from "react-redux";
import {addmessage} from "../../redux/messagetext/reducer";
const Sendmessage = () => {
    const dispatch=useDispatch()
    const handlsend = (e) => {
      e.preventDefault()
        const message={
          text:e.target.sendtext.value
        }
        dispatch(addmessage(message))
        e.target.reset()
    }
    return (
        <div className='sendmessage rounded-3 d-flex align-items-center'>
            <div className="addtelimgloc ">
                <img className='w-100' src={attachment} alt="img"/>
            </div>
            <form className='w-100' onSubmit={handlsend}>
            <div className="coreinput d-flex align-items-center">

                <input type="text" id='sendtext'  className='messageinp' placeholder='message'/>
                <div className="smalicon">
                    <img className='w-100' src={smalicon} alt="icon"/>
                </div>
        <button className="sendbtn">
            <img className='w-100' src={sendicon} alt="icon"/>
        </button>
            </div>
            </form>
        </div>
    );
};

export default Sendmessage;