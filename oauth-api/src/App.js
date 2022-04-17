import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Register from "./Page/Registor";
import Home from "./Page/Home";
import Navbar from "./Page/Navbar";
import Searchsort from "./Page/Searchsort";

function App() {
    const [regist, setregist] = useState(false);

    useEffect(()=>{
        localStorage.getItem('token') &&
            setregist(localStorage.getItem('token'))
    },[])

    return (
        <BrowserRouter>
            <Navbar/>
            {regist?(<Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="/search" element={<Searchsort/>}/>

            </Routes>):(
                <Register setregist={setregist}/>
            )}

        </BrowserRouter>
    );
}

export default App;
