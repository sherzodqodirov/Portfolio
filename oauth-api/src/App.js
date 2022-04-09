import React from "react";
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Register from "./Page/Registor";
import Home from "./Page/Home";
import Navbar from "./Page/Navbar";
function App() {
  return (
      <BrowserRouter>
           <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/registor" element={<Register/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
