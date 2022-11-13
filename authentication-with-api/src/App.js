import React, {lazy, Suspense, useEffect, useState} from "react";
import axios from "axios";
import Menu from "./Menu/Menu"
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import "./App.css"
const Home=lazy(()=>import("./Home/Home"));
const Post=lazy(()=>import("./Post/Post"))
const LoginPage=lazy(()=>import("./loginPage/LoginPage"))
const NotFount=lazy(()=>import("./NotFound/NotFount"))
function App() {
const [user,setUser]=useState("")


const inputValue=(val)=>{
    console.log(val)
}
    const googlevar=(a)=>{
        setUser(a)
    }

  return (
    <>
        <BrowserRouter>
            <Menu user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Suspense fallback={<>Loading...</>}><Home/></Suspense>}/>
                 <Route path="/login" element={<Suspense fallback={<>Loading...</>}>{user ? <Navigate to="/"/> :<LoginPage googlevar={googlevar} inputValue={inputValue}/>}</Suspense>} />
                <Route path="/post/:id" element={<Suspense fallback={<>Loading...</>}> {user ? <Post/> :<Navigate to="/login"/>} </Suspense>}/>
                <Route path="*" element={<NotFount/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
