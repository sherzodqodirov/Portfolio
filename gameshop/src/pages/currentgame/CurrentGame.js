import React from 'react';
import {useSelector} from "react-redux";
import GameBuybtn from "../../components/gamebuy/GameBuybtn";

const CurrentGame = () => {
    const currentitem = useSelector(state => state.game.currentgame)
    if (!currentitem) return <h1 className='m-5'>No Data</h1>

    return (<div className="container">
        <div className="row">
            <div className="col-lg-8 col-12 ">
                <h4>{currentitem.title}</h4>
                <iframe
                    width="100%"
                    height="350"
                    src={currentitem.video}
                    title="YouTube video player"
                ></iframe>
                <p className='my-3' >{currentitem.description}</p>
            </div>
            <div className="col-lg-4 col-12 ">
                <div className='boxgame' style={{margin:"40px auto"}}>
                    <div className="imggame">
                        <img className='w-100' src={currentitem.image} alt="rasim"/>
                    </div>
                    <div className="textgame mt-3 mb-2">
                        <div className="generbox">
                            <p className='genergame'>{currentitem.gener}</p>
                        </div>
                        <GameBuybtn Data={currentitem}/>
                        <a href={currentitem.downtorr} download className='mt-3'>
                            <button className='mt-3 btn btn-warning' type="button"><h6>Cкачать торрент
                                безплатно</h6></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default CurrentGame;
