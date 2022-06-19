import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCart} from "../../redux/cart/reducer";
import './listzakaz.css';

const Listzakaz = ({games}) => {
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(deleteCart(games.id))
    }
    return (
        <div className='gamezakazbox mb-5 '>
            <div className="row p-0 m-0">
                <div className="col-md-4 ">
                    <div className="imgame">
                        <img className='w-100' src={games.imageUrl} alt={games.title}/>
                    </div>
                </div>
                <div className="col-md-8 ">
                    <div className="mt-3 zakaztext ">
                        <h4 className='text-info'>{games.name}</h4>
                        <button className='mt-3 btn btn-danger' onClick={handleClick}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listzakaz;
