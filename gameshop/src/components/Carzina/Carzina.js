import React from 'react';
import {BsCart3} from 'react-icons/bs';
import './carzina.css'
const Carzina = () => {
    return (
        <div className='cartblock'>
            <BsCart3 size='28px'/>
            <span className='total-cart'>100$</span>
        </div>
    );
};

export default Carzina;
