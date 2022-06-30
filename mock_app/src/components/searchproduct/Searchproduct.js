import React from 'react';
import {FcSearch} from "react-icons/fc";
import {useDispatch} from "react-redux";
import {getsearch} from "../../redux/allproductSlice/reducer";

const Searchproduct = () => {
const dispatch=useDispatch()

    const hendlSub=(e)=>{
        e.preventDefault()
        const serarchval=e.target.searchid.value;
        dispatch(getsearch(serarchval))
        e.target.reset()
    }
    return (
        <form onSubmit={hendlSub} className="d-flex" role="search">
            <input id='searchid' className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit"><FcSearch size='20px'/></button>
        </form>
    );
};

export default Searchproduct;
