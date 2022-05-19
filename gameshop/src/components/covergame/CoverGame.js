import React from 'react';
import './covergame.css'
const CoverGame = ({Data}) => {
    return (
        <>
        <div  className='boxgame'>
            <div className="imggame">
                <img className='w-100' src={Data.image} alt="rasim"/>
            </div>
            <div className="textgame">
                <h4>{Data.title}</h4>
                <p>gener</p>
                <h5>{Data.price} $</h5>
            </div>
           </div>
         </>
    );
};

export default CoverGame;
