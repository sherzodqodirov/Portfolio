import React from 'react';
import {useSelector} from "react-redux";
import {BsFillPencilFill} from "react-icons/bs";
import {TiDelete} from "react-icons/ti"
import './addlistgame.css'
import Loading from "../Loading/Loading";

const Addlistgame = () => {

    const datgame = useSelector(state => state.gamesall.itemsgamesall);


    if (!datgame) return <Loading/>
    return (
        <>
            <h1 className='mt-5'>List games</h1>

            {datgame.map((item) => (
                <div key={item.id}
                     className="bodygame d-flex p-2 align-items-center justify-content-sm-center flex-wrap mb-3">

                    <div className="infogame d-flex flex-wrap">
                        <div className="imglistbox">
                            <img className="imglist" src={item.imageUrl} alt={item.name}/>
                        </div>
                        <h6 className='ms-5 mt-4'>{item.name}</h6>
                    </div>
                    <div className="delchang d-flex ms-auto align-items-center">
                        <h6 className='liscur'><BsFillPencilFill size='20px' color='#508AFF'/></h6>
                        <h6 className='ms-5 liscur'><TiDelete size='30px' color='#FF4040'/></h6>
                    </div>

                </div>

            ))}
        </>
    );
};

export default Addlistgame;
