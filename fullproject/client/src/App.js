import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistryPage from "./pages/authpage/RegistryPage";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/authpage/LoginPage";
import HomePage from "./pages/homepage/HomePage";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { loggetuser } from "./redux/authuser/registslice";

function App() {
  const dispatch=useDispatch()
const {isLogget}=useSelector(state=>state.userdata)

useEffect(()=>{
  localStorage.getItem('USERTOKEN') ? dispatch(loggetuser(true)):dispatch(loggetuser(false)) 
},[localStorage.getItem('USERTOKEN')])

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/registration"} element={<RegistryPage />} />
        <Route path={"/login"} element={isLogget ?<Navigate to='/' /> : <LoginPage /> } />
        <Route index element={isLogget ? <HomePage />:<Navigate to='/login'/>} />
      </Route>
    </Routes>
  );
}

export default App;
