import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import {ImExit} from "react-icons/im";
import {AiTwotoneHome} from 'react-icons/ai';
import {BsShop} from 'react-icons/bs';
import {RiQuestionAnswerLine} from 'react-icons/ri';
import {AiOutlineUserAdd} from 'react-icons/ai'
import rimg from "../../images/Right block.png"
import './navbar.scss';
import Addadminmodal from "../adminaddmodal/Addadminmodal";

const Navbar2 = ({settoken}) => {
    const navigate = useNavigate()
    const handleclick = () => {
        localStorage.removeItem("token")
        settoken(false)
    }

    return (<div className='container-fluid'>
        <div className="row">
            <div className="offset-2 col-10 ">
                <nav className="navbar">
                    <div className="container">
                        <Link to='/' className="btn btn-primary d-flex align-items-center py-2"><AiOutlineUser
                            size="20px"/>
                            <h6 className='m-0 ms-2'>Asosiyga qaytish</h6>
                        </Link>
                        <button className="btn btn-success d-flex align-items-center py-2"  data-bs-toggle="modal" data-bs-target="#exampleModal"><AiOutlineUserAdd
                            size='20px'/><h6 className='m-0 ms-2'>Admin qoshish</h6></button>
                        <Addadminmodal/>
                        <Link onClick={handleclick} to='/login'
                              className="btn btn-danger d-flex align-items-center py-2">
                            <h6 className='m-0 me-2'>Adminlikdan chiqish</h6>
                            <ImExit size="20px"/>
                        </Link>

                        <div className='pe-none user-select-none'>
                            <img src={rimg} alt="rasim"/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </div>)
}

export default Navbar2