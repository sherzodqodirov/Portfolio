import React from "react";
import "./App.scss"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registor from "./Page/Registor";
import Students from "./Page/Students";
import Navbar from "./Components/Navbar";
import Login from "./Page/Login";

function App() {
  return (
    <BrowserRouter>

        <Routes>
            <Route path='/'  element={<Students/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Registor/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
