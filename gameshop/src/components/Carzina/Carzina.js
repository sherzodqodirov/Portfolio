import React, {useState} from 'react';
import {BsCart3} from 'react-icons/bs';
import './carzina.css'
import {useSelector} from "react-redux";

const Carzina = () => {
    const items = useSelector(state => state.cart.itemsCarts);
    const [isCart, setCart] = useState(false)
    //    1 usull umumiy pulni hisoblashni
    const totalP = [];
    for (const val of items) {
        const a = val.price;
        totalP.push(a)
    }
    console.log(totalP)
    let summoney = 0;
    let init = 0;
    for (init = 0; init < totalP.length; init++) {
        summoney += totalP[init];
    }


    // 2 usul easy :)
    //const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

    return (<div className='cartblock' onClick={() => setCart(!isCart)}>
        <BsCart3 size='28px'/>
        {totalP.length > 0 ? (<>
            <span
                className="position-absolute top-0  start-0 translate-middle badge rounded-pill bg-danger">
                       {init}
            </span>
            <span className='total-cart'>{summoney}$</span></>) : null}
        {isCart ? (
            <div className='listgame'>
                <h6>No Game</h6>
            </div>) : null}

    </div>);
};

export default Carzina;
