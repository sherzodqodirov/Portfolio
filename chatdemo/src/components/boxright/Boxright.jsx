import React from 'react';
import imgtop from '../../assets/imgtop.svg';
import userimg1 from '../../assets/userimg1.jpg';
import userimg2 from '../../assets/usericon2.svg';
import Sendmessage from "../sendmessage/Sendmessage";
import {useSelector} from "react-redux";
const Boxright = () => {
    const message=useSelector(state => state.messagetext.messages)
    
    return (
        <div className='boxright rounded-3'>
            <div className="proftop rounded-3 d-flex ">
                <div className="imgprof me-2">
                    <img className='w-100' src={imgtop} alt="img"/>
                </div>
                <h4>Madina Bozariva <br/><span>@madina</span></h4>
            </div>
            <div className='messageplace'>
                <div className="messagetext d-flex">
                    <div className="userimg me-2">
                        <img src={userimg1} alt="img"/>
                    </div>
                    <div className="usertext mt-4">
                        <h6 >Salom </h6></div>
                    </div>

                {message.map((item,key)=>(
                    <div key={key} className="memessage d-flex justify-content-end mt-3">
                        <div className="metext">
                            <h6 className='m-0'>{item.text}</h6>
                        </div>
                        <div className="userimg  ms-2">
                            <img src={userimg2} alt="img"/>
                        </div>
                    </div>
                ))}


            </div>
            <Sendmessage/>
        </div>
    );
};

export default Boxright;