import React from 'react';
import {AiOutlineSearch} from "@react-icons/all-files/ai/AiOutlineSearch";
import {IoNotifications} from "@react-icons/all-files/io5/IoNotifications";
import avataruser from '../../icons/avataruser.png';
import logo1 from '../../icons/logo1.png'
import './navinform.scss'
import logonav from '../../icons/logonav.png'
const Navinform = () => {
    return (
        <nav className="navbar navbar-light navinform ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                   <div className="navlogoD">
                       <img className='w-100' src={logonav} alt="logo"/>
                   </div>
                <div className="navlogoM">
                       <img className='w-100' src={logo1} alt="logo"/>
                   </div>
                </a>
                <ul className='  ulinform'>
                    <li className='litem  '>
                       <div className="searchico">
                           <AiOutlineSearch size='20px' color='#2F80ED'/>
                       </div>
                    </li>
                 <li className='litem '>
                       <div className="notif">
                           <IoNotifications size='24px' color='#2F80ED'/>
                       </div>
                    </li>
                 <li className='litem '>
                     <div className="dropdown">
                         <button className=" downBtn btn  dropdown-toggle" type="button" id="dropdownMenuButton1"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                             <div className="userimg">
                                 <img className='w-100' src={avataruser} alt="av"/>
                             </div>
                             <h6 className='usernametext m-0 mx-3'>Soliyeva S.</h6>
                         </button>
                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                             <li><a className="dropdown-item" href="#">Action</a></li>
                             <li><a className="dropdown-item" href="#">Another action</a></li>
                             <li><a className="dropdown-item" href="#">Something else here</a></li>
                         </ul>
                     </div></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navinform;
