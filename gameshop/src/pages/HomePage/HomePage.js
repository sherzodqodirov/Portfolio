import React, {useEffect} from 'react';
import Data from "../../Data";
import CoverGame from "../../components/covergame/CoverGame";
import "./homepage.css"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {allgames} from "../../redux/getallgames/reducer";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {
const data=useSelector(state => state.gamesall.itemsgamesall)

    if (!data) return <Loading/>

    return (
        <div className='homebox container'>
           <div className="corecovergame">
               {data.map((data)=><CoverGame key={data.id} data={data}/>)}
           </div>
        </div>
    );
};

export default HomePage;


