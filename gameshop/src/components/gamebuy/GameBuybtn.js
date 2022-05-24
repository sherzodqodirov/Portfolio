import React from 'react';
import {FaCartPlus} from "react-icons/fa"
import './buybtn.css'
const GameBuybtn = ({Data}) => {
    return (
        <button className=' btn btn-primary gamebuybtn'>
            <h6 className='mb-0'><FaCartPlus size='28px' color='red'/></h6>
            <h6 className='mb-0'>{Data.price} $ В Карзину </h6>
        </button>
    );
};

export default GameBuybtn;
