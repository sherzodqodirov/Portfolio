import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.scss"
import Profil from "./Components/Profil";
import CoreProducts from "./Components/CoreProducts";
import TopBtngroup from "./Components/TopBtngroup";
import Orderhs from "./Components/Orderhs";
import Savedstore from "./Components/Savedstore";

function App() {
    return (
        <BrowserRouter>
              <TopBtngroup/>
            <div className="corebox">
                    <Profil/>
                <Routes className="coreproductbox">
                        <Route path="/" element={<CoreProducts/>}/>
                        <Route path="/order-history" element={<Orderhs/>}/>
                        <Route path="/saved-stores" element={<Savedstore/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
