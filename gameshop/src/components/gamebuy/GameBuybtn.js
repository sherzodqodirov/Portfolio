import React from 'react';
import {FaCartPlus} from "react-icons/fa";
import {BsCartXFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {additemCartpush, deleteCart} from "../../redux/cart/reducer";
import './buybtn.css';

const GameBuybtn = ({Data}) => {

    const dispath = useDispatch();
    const items = useSelector(state => state.cart.itemsCarts);
    const isitemsCart = items.some(items => items.id === Data.id)

    const handleclick = (e) => {
        e.stopPropagation()
        if (isitemsCart) {
            dispath(deleteCart(Data.id))
        } else {
            dispath(additemCartpush(Data))
        }
    }
    return (
        <>
            <button onClick={handleclick}
                    className={isitemsCart ? ' btn btn-danger gamebuybtn' : ' btn btn-primary gamebuybtn'}>
                {isitemsCart ? <h6 className='mb-0'><BsCartXFill size='28px' color='#71C562'/></h6> :
                    <h6 className='mb-0'><FaCartPlus size='28px' color='#fff78b'/></h6>}
                {isitemsCart ? <h6 className='mb-0'>Удалить</h6> : <h6 className='mb-0'>{Data.price} $ В Карзину </h6>}
            </button>

        </>);

};

export default GameBuybtn;
