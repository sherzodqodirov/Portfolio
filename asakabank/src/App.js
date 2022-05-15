import React from "react";
import './App.scss'
import Fade from 'react-reveal';
import Home from "./pages/homepage/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <>
            <Fade top>
                <Navbar/>
            </Fade>
            <Home/>
        </>
    );
}

export default App;
