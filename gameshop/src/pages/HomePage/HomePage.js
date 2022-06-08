import React, {useEffect} from 'react';
import Data from "../../Data";
import CoverGame from "../../components/covergame/CoverGame";
import "./homepage.css"

const HomePage = () => {

    return (
        <div className='homebox container'>
           <div className="corecovergame">
               {Data.map((Data)=><CoverGame key={Data.id} Data={Data}/>)}
           </div>
        </div>
    );
};

export default HomePage;


