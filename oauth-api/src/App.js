import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Register from "./Page/Registor";
import Home from "./Page/Home";
import Navbar from "./Page/Navbar";
import Searchsort from "./Page/Searchsort";
import axios from "axios";
import Layout from "./components/Layout";

function App() {
    const [regist, setregist] = useState(false);
    const [data, setdata] = useState([])


    useEffect(() => {
        localStorage.getItem('token') &&
        setregist(localStorage.getItem('token'));

        axios.request({
            method: 'GET',
            url: 'https://toko.ox-sys.com/variations',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                setdata(response.data.items)
            }).catch(error => {
            console.error(error);
        });

    }, [])



    return (
        <BrowserRouter>
            {regist ? (<Routes>
                <Route path='/' element={<Layout  regist={regist}/>}>
                <Route index element={<Home data={data} />}/>
                <Route path="/search" element={<Searchsort data={data} />}/>
                </Route>
            </Routes>) : (
                <Register setregist={setregist}/>
            )}

        </BrowserRouter>
    );
}

export default App;
