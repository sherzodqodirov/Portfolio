import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FcSearch} from "react-icons/fc"
import {useDispatch, useSelector} from "react-redux";
import {getcategry} from "../../redux/categoriySlice/reducer";
import {getselectedproduct} from "../../redux/allproductSlice/reducer";
import Searchproduct from "../searchproduct/Searchproduct";

const Menu = () => {
const [selval,setselval]=useState("")

    const dispatch=useDispatch()
const namecatg=useSelector(state => state.namecategory.category)

     useEffect(()=>{
         dispatch(getcategry())
     },[dispatch])

const handleval=(e)=>{
    setselval(e.target.value)
    dispatch(getselectedproduct(e.target.value))

}
    return (
        <nav className=" menu position-fixed w-100 top-0  navbar navbar-expand-lg bg-light p-3">
            <div className="container-fluid ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <select className='ms-5' onChange={handleval} >
                        <option value=" ">all product</option>
                        {namecatg.map(option=>(
                            <option key={option}  value={option}>{option}</option>
                        ))}
                    </select>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                   <Searchproduct/>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
