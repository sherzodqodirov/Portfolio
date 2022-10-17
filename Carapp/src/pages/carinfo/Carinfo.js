import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getcarinfo} from "../../redux/carinfo/reducer";
import './carinfo.scss';
import Cardinfocar from "../../components/cardinfocar/Cardinfocar";
import Loading from "../../components/Loading/Loading";
import Carimg3d from "../../components/carimg3d/Carimg3d";

function Carinfo() {
    const {carid} = useParams()
    const dispatch = useDispatch()
    const carinfo=useSelector((state)=>state.carinfo.carinfodat);
    const isloading = useSelector((state) => state.carinfo.isloading)
    const error = useSelector((state) => state.carinfo.error)


    useEffect(() => {
        dispatch(getcarinfo(carid))
    }, [carid])

    return (
        <div className='container mb-5'>
            <h6>Bosh sahifa &gt; modellari&gt; turlari</h6>
            <h1 className="mb-5">Modellari</h1>
            {isloading ? (
                <Loading/>
            ) : error !== null ? (
                <h4>{error}</h4>
            ) : (
                <div className="row">
                    <div className="col-lg-4">
                        <Cardinfocar carinfo={carinfo}/>
                    </div>

                    <div className="col-lg-8">
                     <Carimg3d carinfo={carinfo}/>
                    </div>
                </div>
                )}
        </div>
    );
}

export default Carinfo;