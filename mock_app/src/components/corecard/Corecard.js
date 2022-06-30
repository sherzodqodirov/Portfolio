import React, {useCallback} from 'react';
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {getfindid} from "../../redux/findidSlice/reducer";
import './corecard.scss'

const Corecard = ({data}) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handliClick = useCallback(() => {
        navigate(`product/${data.id}`)
        dispatch(getfindid(data.id))
    },[data.id])
    return (
        <div onClick={handliClick} className="corecard mb-4 rounded-2">
            <div className='imgbox'>
                <img src=  {data.images[0]} alt={data.title}/>
            </div>
           <div className='p-3'>
               <h5>{data.title}</h5>
               <h6>price: {data.price} $</h6>
           </div>
        </div>
    );
};

export default Corecard;
