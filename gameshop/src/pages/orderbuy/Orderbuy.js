import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Listzakaz from "../../components/listzakaz/Listzakaz";
import {deleteCart} from "../../redux/cart/reducer";

const Orderbuy = () => {
    const items=useSelector(state => state.cart.itemsCarts);
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0)
    const handleClick = () => {
      alert('Сайт Разработке !')
    }

if (items<1) return <h2 className='m-5 text-warning '>Корзина пусто !</h2>
    return (
        <div className='container '>
            {items.map((games,idn)=><Listzakaz key={idn} games={games} />)}
            <hr/>
            <div className="texend d-flex align-items-center flex-wrap justify-content-between mb-4" >
                <h6>Игры : {items.length}</h6>
                <h6>Итогo : {totalPrice}$</h6>
                <button className='btn btn-primary' onClick={handleClick}>оплатить</button>
            </div>
        </div>
    );
};

export default Orderbuy;
