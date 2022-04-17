import React, {useDeferredValue, useEffect, useMemo, useState} from 'react';
import axios from "axios";
import {data} from "../data";

const Home = () => {

    // useEffect(()=>{
    //     axios({
    //         method:"get",
    //         url:'https://toko.ox-sys.com/variations',
    //         header:{
    //             'Authorization':`Bearer${localStorage.getItem('token')}`,
    //             'Content-Type':' application/json',
    //             'Accept':' application/json',
    //         }
    //     })
    //         .then((res)=>{
    //             console.log(res )
    //         })
    //         .catch((err)=>{
    //             console.log(err.message)
    //         })
    // },[])

const[value,setvalue]=useState('');
const defferedValue=useDeferredValue(value);
const [items,setitems]=useState(data);

const filtereditems=useMemo(()=>{
    return items.filter(item=>item.name.toLowerCase().includes(defferedValue))
},[defferedValue]);

const onChangeValue=(e)=>{
    setvalue(e.target.value);
}


    return (
        <div className="container text-center">
            <h1>Home</h1>

            <input className="border my-5 w-25 p-2 " type="text" value={value} onChange={onChangeValue} placeholder="search"/>

            <div>
                {
                    filtereditems.map(item=>(
                        <div key={item.id}>
                            <h6>{item.name}</h6>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
