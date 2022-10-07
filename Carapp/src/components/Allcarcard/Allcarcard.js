import React from 'react';
import {useNavigate} from "react-router-dom";
import '../Cardcar/cardcar.scss'

function Allcarcard({allcardata}) {

    const navigate = useNavigate()

    const handleclick = () => {
        navigate(`${allcardata._id}`)
    }

    return (<div className='card card1  border-0' onClick={handleclick}>
        <div className="card-header p-0 overflow-hidden rounded">

            <img className='w-100 img-fluid' src={`https://cartestwebapp.herokuapp.com/${allcardata.imgUrl}`}
                 alt="rasim yoq"/>
        </div>
        <div className="card-body">
            <h6>{allcardata?.marka?.name}</h6>
            <h6>narxi : {allcardata?.price}$</h6>
        </div>
    </div>);
}

export default Allcarcard;