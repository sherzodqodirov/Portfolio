import React from "react";
import {Route, Routes} from "react-router-dom";
import RegistryPage from "./pages/authpage/RegistryPage";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/authpage/LoginPage";
import HomePage from "./pages/homepage/HomePage";
import './App.scss';

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'/registration'} element={<RegistryPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
