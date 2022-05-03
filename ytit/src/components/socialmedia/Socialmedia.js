import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa';
import {FiInstagram} from "@react-icons/all-files/fi/FiInstagram";
import {FiFacebook} from "@react-icons/all-files/fi/FiFacebook";
import {FaYoutube} from "@react-icons/all-files/fa/FaYoutube";
import {AiOutlineGlobal} from "@react-icons/all-files/ai/AiOutlineGlobal";
import './socialmedia.scss';

const Socialmedia = () => {
    return (
                <div className="socialmedia">
                    <div className='telegram '>
                        <a href="">
                            <FaTelegramPlane size='30px'/>
                        </a>
                    </div>
                    <div className='instagram mx-4'>
                        <a href="">
                            <FiInstagram size='30px' color='red'/>
                        </a>
                    </div>
                    <div className='facebook'>
                        <a href="">
                            <FiFacebook size='30px'/>
                        </a>
                    </div>
                    <div className='youtube mx-4'>
                        <a href="">
                            <FaYoutube className='text-dark' size='30px'/>
                        </a>
                    </div>
                    <div className='youtube'>
                        <a href="">
                            <AiOutlineGlobal className='text-dark' size='30px'/>
                        </a>
                    </div>
                </div>
    );
};

export default Socialmedia;