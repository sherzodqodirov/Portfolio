import React from 'react';
import GMbtnicon from "../icons/btngmicon.svg";
import Modal from "./Modal";

const TopBtngroup = () => {
    return (
        <div className="btngrouplar d-flex">
            <button className="btn btn-light d-flex align-items-center btnGM"><img className="GMbtnicon" src={GMbtnicon}
                                                                                   alt="icon"/>GMarket
            </button>

            <button className="btn btn-light btnBack"><span className="icon1 icon-arrowlefticon"></span></button>

            <button className="btndown btn btn-light " type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                <span className="icon2 icon-maplocicon"></span> 2972 Westheimer Rd. Santa Ana <span
                className="icon2 icon-downicon"></span>
            </button>
            <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">1 value</a></li>
                <li><a className="dropdown-item" href="#">2 value</a></li>
                <li><a className="dropdown-item" href="#">3 value</a></li>
            </ul>
            <label htmlFor="searchavl">
           <div className="searchBtn btn ">
               <span className="icon2 icon-loopicon"></span>
               <input type="text"  id="searchavl" placeholder="Search products in Wallmart"/>
               <span className="icon2 icon-inputseticon"></span>
           </div>
            </label>

           <Modal/>

            <div className="priceproduct d-flex align-items-center">
                <div className="aylprod"><span className="icon2 icon-producticon"></span></div>
                <h6>$230.80</h6>
            </div>
        </div>
    );
};

export default TopBtngroup;
