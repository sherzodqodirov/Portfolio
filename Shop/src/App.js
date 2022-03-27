import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Container/Header";
import ProductList from "./Container/ProductList";
import NotFound from "./Container/NotFound/NotFound";
import ProductDetails from "./Container/ProductDetails";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                
                <Route path="/" element={<ProductList/>}/>
                <Route path="/product/:productid" element={<ProductDetails/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

