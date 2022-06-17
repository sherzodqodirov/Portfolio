import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setcurrentGame} from "../../redux/game/reducer";
import GameBuybtn from "../gamebuy/GameBuybtn";
import './covergame.css'

const CoverGame = ({data}) => {

    const navigate=useNavigate()
    const {title}=useParams()
    const dispatch=useDispatch()
    const handleClick = () => {
        navigate(`/app/${data.name}`)
        dispatch(setcurrentGame(data));
    }

    return (

        <div  className='boxgame' onClick={handleClick} >
            <div className="imggame">
                <img className='w-100' src={data.imageUrl} alt="rasim"/>
            </div>
            <div className="textgame mb-2">
                <h4 className='titlgame'>{data.name}</h4>
               <div className="generbox">
                   <p className='genergame'>{data.gener}</p>
               </div>
                <GameBuybtn data={data}/>
            </div>
           </div>
    );
};

export default CoverGame;
