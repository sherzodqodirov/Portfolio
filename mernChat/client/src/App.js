import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ChatLayout from "./components/ChatLayout";
import Dashboard from "./pages/Dashboard";
import UsersChat from "./pages/UsersChat";

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/login"}/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/chat/"} element={<ChatLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path={"user/:id"} element={<UsersChat/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
