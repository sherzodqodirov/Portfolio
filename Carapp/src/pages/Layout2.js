import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import Navbar2 from "../components/Navbar/Navbar2";
import {AiTwotoneHome} from "react-icons/ai";
import {BsShop} from "react-icons/bs";
import {RiQuestionAnswerLine} from "react-icons/ri";

const Layout2 = ({settoken}) => {
  return (
    <>
      <Navbar2 settoken={settoken}/>
     <div className='container-fluid'>
         <div className="row">
             <div className="col-2 ps-4">
                 <div className='rightnav'>
                     <NavLink to='/coreadmin' className='rightitem'>
                         <h6 className=' mt-3'><span><AiTwotoneHome size='24px'/></span>Asosiy</h6>
                     </NavLink>
                     <NavLink to='elonlar' className='rightitem '>
                         <h6 className=' my-5'><span><BsShop size='24px'/></span>E’lonlar</h6>
                     </NavLink>
                     <NavLink to='savolar' className='rightitem'>
                         <h6 className=' m-0'><span><RiQuestionAnswerLine size='24px'/></span>Savollar
                         </h6></NavLink>
                 </div>
             </div>
             <div className="col-10 " style={{background:"#E3E3E3",padding:"40px", height:"89vh"}}>
                 <Outlet/>
             </div>
         </div>
     </div>
    </>
  );
};

export default Layout2;
