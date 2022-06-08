import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setcurrentGame} from "../../redux/game/reducer";
import GameBuybtn from "../gamebuy/GameBuybtn";
import './covergame.css'

const CoverGame = ({Data}) => {

    const navigate=useNavigate()
    const {title}=useParams()
    const dispatch=useDispatch()
    const handleClick = () => {
        navigate(`/app/${Data.title}`)
        dispatch(setcurrentGame(Data));
    }

    return (

        <div  className='boxgame' onClick={handleClick} >
            <div className="imggame">
                <img className='w-100' src={Data.image} alt="rasim"/>
            </div>
            <div className="textgame mb-2">
                <h4 className='titlgame'>{Data.title}</h4>
               <div className="generbox">
                   <p className='genergame'>{Data.gener}</p>
               </div>
                <GameBuybtn Data={Data}/>
            </div>
           </div>
    );
};

export default CoverGame;
