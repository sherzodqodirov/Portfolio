import React, {useEffect, useState} from 'react';
import axios from "axios";
import data from "../data";

const Home = () => {

    
    useEffect(()=>{
        axios({
            method:"get",
            url:'https://toko.ox-sys.com/variations',
            header:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`,
                'Content-Type':' application/json',
                'Accept':' application/json',
            }
        })
            .then((res)=>{
                console.log(res )
            })
            .catch((err)=>{
                console.log(err.message)
            })
    },[])


    return (
        <div className="container ">
            <h1>Data</h1>
            <ol>
                {data.map(item => (
                <h5 key={item.id}><li>{item.name}</li></h5>
            ))}
            </ol>
        </div>
    );
};

export default Home;
