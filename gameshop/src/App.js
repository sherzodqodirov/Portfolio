import React, {useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CurrentGame from "./pages/currentgame/CurrentGame";
import Layout from "./pages/Layout";
import Orderbuy from "./pages/orderbuy/Orderbuy";
import Errorpage from "./pages/errorpage/Errorpage";
import AdminPanel from "./admin/adminpanel/AdminPanel";
import AdminLogin from "./admin/adminlogin/AdminLogin";
import './App.css';

function App() {

    const [adreg, setadreg] = useState(false)
    useEffect(() => {
        localStorage.getItem('token') && setadreg(localStorage.getItem('token'));
    }, [])





    return (
        <BrowserRouter>
            <Routes>
                <Route to='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="app/:title" element={<CurrentGame/>}/>
                    <Route path="orderbuy" element={<Orderbuy/>}/>
                    {adreg ? (<Route path="paneladmin" element={<AdminPanel/>}/>) : (
                        <Route path="adminlogin" element={<AdminLogin setadreg={setadreg}/>}/>)}
                    <Route path='*' element={<Errorpage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
