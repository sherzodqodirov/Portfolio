import React, {useEffect} from 'react';
import "./homepage.css"
import Data from "../../Data";
import CoverGame from "../../components/covergame/CoverGame";

const HomePage = () => {
     console.log(Data)

    return (
        <div className='homebox container'>
           <div className="corecovergame">
               {Data.map((Data)=><CoverGame key={Data.id} Data={Data}/>)}
           </div>
        </div>
    );
};

export default HomePage;


