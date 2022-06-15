import React, {useEffect} from 'react';
import Data from "../../Data";
import CoverGame from "../../components/covergame/CoverGame";
import "./homepage.css"
import {useDispatch} from "react-redux";
import axios from "axios";
import {allgames} from "../../redux/getallgames/reducer";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        getallgames()
    },[])

    async function getallgames() {
        try {
            const res = await axios.get("https://game-shop-uz.herokuapp.com/api/auth/game")
            dispatch(allgames(res.data.data))
            console.log(res.data.data)
        } catch (e) {
            console.error(e.message)
        }
    }



    return (
        <div className='homebox container'>
           <div className="corecovergame">
               {Data.map((Data)=><CoverGame key={Data.id} Data={Data}/>)}
           </div>
        </div>
    );
};

export default HomePage;


