import React, {useCallback, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {BsCart3} from 'react-icons/bs';
import {useSelector} from "react-redux";
import ListCartgame from "../listcartgame/ListCartgame";
import './carzina.css'

const Carzina = () => {
    const navigate=useNavigate()
    const items = useSelector(state => state.cart.itemsCarts);
    const [isCart, setCart] = useState(false)
    //    1 usull umumiy pulni hisoblashni
    const totalP = [];
    for (const val of items) {
        const a = val.price;
        totalP.push(a)
    }
    let summoney = 0;
    let init = 0;
    for (init = 0; init < totalP.length; init++) {
        summoney += totalP[init];
    }

    // 2 usul easy :)
    //const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

    const handelzakaz =useCallback( () => {
      setCart(false);
        navigate('/orderbuy');
    },[navigate])


    return (<div className='cartblock' onClick={() => setCart(!isCart)}>
        <BsCart3 size='28px'/>
        {totalP.length > 0 ? (<>
            <span
                className="position-absolute top-0  start-0 translate-middle badge rounded-pill bg-danger">
                       {init}
            </span>
            <span className='total-cart'>{summoney}$</span></>) : null}
        {isCart ? (<div className='listgame'>
            { items.length>0 ? items.map((itm, idn) => (<ListCartgame key={idn}  itm={itm} idn={idn}/>)):"No Game !"}
            <hr/>
            <h6 className='text-end'> total: {summoney}$</h6>
            <button className=' mt-3 btn btn-primary' onClick={handelzakaz} >оформить заказ</button>
        </div>) : null}

    </div>);
};

export default Carzina;
