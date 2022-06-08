import React from 'react';
import './listzakaz.css';
import {useDispatch} from "react-redux";
import {deleteCart} from "../../redux/cart/reducer";

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
                        <img className='w-100' src={games.image} alt={games.title}/>
                    </div>
                </div>
                <div className="col-md-8 ">
                    <div className="mt-3 zakaztext ">
                        <h4 className='text-info'>{games.title}</h4>
                        <h4 className='text-success'> price: {games.price}$</h4>
                        <button className='mt-3 btn btn-danger' onClick={handleClick}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listzakaz;
