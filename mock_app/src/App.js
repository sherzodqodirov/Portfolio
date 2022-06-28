import React from "react";
import {Routes ,Route} from "react-router-dom";
import Home from "./Pages/home/Home";
import Layout from "./components/layout/Layout";
import './App.scss';

function App() {
  return (
   <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
        </Route>
   </Routes>
  );
}

export default App;
