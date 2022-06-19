import React from 'react';
import {useSelector} from "react-redux";
import CoverGame from "../../components/covergame/CoverGame";
import Loading from "../../components/Loading/Loading";
import "./homepage.css"

const HomePage = () => {
const data=useSelector(state => state.gamesall.itemsgamesall)

    if (data==null) return <Loading/>
    if (data.length===0) return <h1>No data</h1>

    return (
        <div className='homebox container'>
           <div className="corecovergame">
               {data.map((data)=><CoverGame key={data.id} data={data}/>)}
           </div>
        </div>
    );
};

export default HomePage;


