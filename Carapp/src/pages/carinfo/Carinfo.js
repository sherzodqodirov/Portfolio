import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getcarinfo} from "../../redux/carinfo/reducer";

function Carinfo() {
    const {carid}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getcarinfo(carid))
    },[carid])

    return (
        <div className='container'>
            <h6>Bosh sahifa &gt; modellari&gt; turlari</h6>
            <h1 className="mb-5">Modellari</h1>
            <div className="row">
                <div className="col-lg-4">54</div>
                <div className="col-lg-8">21</div>
            </div>
        </div>
    );
}

export default Carinfo;