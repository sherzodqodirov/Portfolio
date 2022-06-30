import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/home/Home";
import Layout from "./components/layout/Layout";
import Page404 from "./Pages/notfound/Page404";
import './App.scss';
import Productinfo from "./Pages/productinfo/Productinfo";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='product/:id' element={<Productinfo/>} />
                <Route path='*' element={<Page404/>}/>
            </Route>
        </Routes>
    );
}

export default App;
