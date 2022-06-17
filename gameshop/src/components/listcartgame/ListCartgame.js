import React from 'react';
import './listgamestyle.css';
const ListCartgame = ({itm,idn}) => {
    return (
        <div className='cartlist d-flex justify-content-between'>
            <h6 className='text-success' >{itm.name}</h6>

        </div>
    );
};

export default ListCartgame;
