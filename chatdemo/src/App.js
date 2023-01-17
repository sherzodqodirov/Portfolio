import React from "react";
import {BrowserRouter, Routes} from "react-router-dom";
import Approuter from "./components/router/Approuter";
import './style/global.scss'

function App() {
    return (
        <BrowserRouter>
            <Approuter/>
        </BrowserRouter>
    );
}

export default App;
