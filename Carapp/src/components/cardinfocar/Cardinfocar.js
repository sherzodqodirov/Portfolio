import React from 'react';
import {useSelector} from "react-redux";

const Cardinfocar = ({carinfo}) => {
    return (
        <div className="card border-0 cardinfocar">
            <div className="card-body">
                <h1>{carinfo?.marka?.name}</h1>
                <h5>{carinfo?.price} so'm dan</h5>
                <div className="imgcar">
                    <img className='w-100' src={`https://cartestwebapp.herokuapp.com/${carinfo?.imgUrl}`}
                         alt="rasim yoq"/>
                </div>
                <h6 className='mt-3'>Marka: <span>{carinfo?.marka?.name}</span></h6>
                <h6>Tanirovkasi: <span>{carinfo?.tonirovka}</span></h6>
                <h6>Motor: <span>{carinfo?.motor}</span></h6>
                <h6>Year: <span>{carinfo?.year}</span></h6>
                <h6>Color: <span>{carinfo?.color}</span></h6>
                <h6>Distance: <span>{carinfo?.distance} km</span></h6>
                <h6>Gearbook: <span>{carinfo?.gearbok}</span></h6>
                <h6>Description: <span>{carinfo?.description}</span></h6>
                <hr/>
                <h6 className='text-center'>Umumiy xarajat: <span>{carinfo?.price} so'm dan</span></h6>
            </div>
        </div>
    );
};

export default Cardinfocar;