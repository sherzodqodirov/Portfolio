import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Register from "./Page/Registor";
import Home from "./Page/Home";
import Navbar from "./Page/Navbar";

function App() {
    const [regist, setregist] = useState(false);

    useEffect(()=>{
        localStorage.getItem('token') &&
            setregist(localStorage.getItem('token'))
    },[])

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={regist ? <Home/> : <Navigate to="/registor"/>}/>
                <Route path="/registor" element={<Register setregist={setregist}/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
