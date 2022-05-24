import React from 'react';
import './covergame.css'
import GameBuybtn from "../gamebuy/GameBuybtn";
const CoverGame = ({Data}) => {
    return (
        <>
        <div  className='boxgame'>
            <div className="imggame">
                <img className='w-100' src={Data.image} alt="rasim"/>
            </div>
            <div className="textgame">
                <h4 className='titlgame'>{Data.title}</h4>
               <div className="generbox">
                   <p className='genergame'>{Data.gener}</p>
               </div>
                <GameBuybtn Data={Data}/>
            </div>
           </div>
         </>
    );
};

export default CoverGame;
